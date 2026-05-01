import { ImageResponse } from "next/og";

export const alt = "Moxera premium web ve AI otomasyon sistemleri";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#eef4ff",
          background:
            "radial-gradient(circle at 18% 16%, rgba(115,234,223,0.32), transparent 30%), radial-gradient(circle at 82% 20%, rgba(111,125,255,0.28), transparent 36%), linear-gradient(135deg, #071329 0%, #0a1a37 54%, #081126 100%)",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              border: "2px solid rgba(115,234,223,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#73eadf",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -2 }}>
            moxera
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#73eadf",
              fontSize: 24,
              letterSpacing: 7,
              textTransform: "uppercase",
            }}
          >
            AI Automation / Premium Web / Launch Systems
          </div>
          <div
            style={{
              width: 900,
              fontSize: 76,
              lineHeight: 0.96,
              fontWeight: 700,
              letterSpacing: -4,
            }}
          >
            Premium dijital sistemler, olculebilir operasyonlar.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
