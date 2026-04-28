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
const allowedOrigins = new Set([
  "https://moxera.com.tr",
  "https://www.moxera.com.tr",
  "http://moxera.com.tr",
  "http://www.moxera.com.tr"
]);

function getCorsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if (origin && allowedOrigins.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }

  return headers;
}

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

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getFromEmail() {
  const configuredFrom = process.env.CONTACT_FROM_EMAIL?.trim();
  const defaultFrom = "Moxera <hello@moxera.com.tr>";
  if (!configuredFrom) {
    return defaultFrom;
  }
  if (!configuredFrom.toLowerCase().includes("@moxera.com.tr")) {
    return defaultFrom;
  }
  if (configuredFrom.includes("onboarding@resend.dev")) {
    return defaultFrom;
  }
  return configuredFrom;
}

export function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(request) });
}

export async function POST(request: Request) {
  const headers = getCorsHeaders(request);
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ message: "Çok fazla istek gönderildi. Lütfen biraz sonra tekrar deneyin." }, { status: 429, headers });
    }

    const body = (await request.json()) as ContactPayload;

    if (!body.fullName || !body.email || !body.details) {
      return NextResponse.json({ message: "Zorunlu alanlar eksik." }, { status: 400, headers });
    }
    if (body.website) {
      return NextResponse.json({ message: "Talebiniz alındı." }, { status: 200, headers });
    }

    if (!resend) {
      return NextResponse.json({ message: "Mail servisi yapılandırılmamış. Lütfen yöneticiyle iletişime geçin." }, { status: 500, headers });
    }

    const to = process.env.CONTACT_TO_EMAIL || "meliheken@moxera.com.tr";
    const from = getFromEmail();
    const safeName = escapeHtml(body.fullName);
    const safeCompany = escapeHtml(body.companyName || "-");
    const safePhone = escapeHtml(body.phone || "-");
    const safeEmail = escapeHtml(body.email);
    const safeDetails = escapeHtml(body.details).replace(/\n/g, "<br/>");

    const emailHtml = `
      <h2>Yeni Proje Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${safeName}</p>
      <p><strong>Firma:</strong> ${safeCompany}</p>
      <p><strong>Telefon:</strong> ${safePhone}</p>
      <p><strong>E-posta:</strong> ${safeEmail}</p>
      <p><strong>İhtiyaç Detayı:</strong></p>
      <p>${safeDetails}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: body.email,
      subject: `Moxera yeni talep: ${body.fullName}`,
      html: emailHtml
    });

    if (error) {
      console.error("Resend contact form error", error);
      return NextResponse.json(
        { message: "Mail servisi mesajı gönderemedi. Lütfen doğrudan meliheken@moxera.com.tr adresine yazın." },
        { status: 502, headers }
      );
    }

    return NextResponse.json(
      {
        message: "Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz."
      },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Contact form request failed", error);
    return NextResponse.json({ message: "İstek işlenirken hata oluştu. Lütfen doğrudan meliheken@moxera.com.tr adresine yazın." }, { status: 500, headers });
  }
}
