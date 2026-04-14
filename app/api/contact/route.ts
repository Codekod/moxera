import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  details?: string;
  website?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = requestStore.get(ip);
  if (!record || record.resetAt < now) {
    requestStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (record.count >= MAX_REQUESTS) return true;
  record.count += 1;
  requestStore.set(ip, record);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ message: "Çok fazla istek gönderildi. Lütfen biraz sonra tekrar deneyin." }, { status: 429 });
    }

    const body = (await request.json()) as ContactPayload;

    if (!body.fullName || !body.email || !body.details) {
      return NextResponse.json({ message: "Zorunlu alanlar eksik." }, { status: 400 });
    }
    if (body.website) {
      return NextResponse.json({ message: "Talebiniz alındı." }, { status: 200 });
    }

    if (!resend) {
      return NextResponse.json({ message: "Mail servisi yapılandırılmamış. Lütfen yöneticiyle iletişime geçin." }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "meliheken@moxera.com.tr";
    const from = process.env.CONTACT_FROM_EMAIL || "Moxera <onboarding@resend.dev>";

    const emailHtml = `
      <h2>Yeni Proje Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${body.fullName}</p>
      <p><strong>Firma:</strong> ${body.companyName || "-"}</p>
      <p><strong>Telefon:</strong> ${body.phone || "-"}</p>
      <p><strong>E-posta:</strong> ${body.email}</p>
      <p><strong>İhtiyaç Detayı:</strong></p>
      <p>${body.details.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from,
      to,
      replyTo: body.email,
      subject: `Moxera yeni talep: ${body.fullName}`,
      html: emailHtml
    });

    return NextResponse.json(
      {
        message: "Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz."
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "İstek işlenirken hata oluştu." }, { status: 500 });
  }
}
