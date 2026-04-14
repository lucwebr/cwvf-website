import { ImageResponse } from "next/og";
import { fallbackSiteContent } from "@/lib/content/fallback-data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const { siteSettings } = fallbackSiteContent;

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(144,162,255,0.28), transparent 30%), linear-gradient(135deg, #1516b8 0%, #1a23c6 55%, #2c37d8 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 24,
            fontSize: 26,
            letterSpacing: "0.24em",
            padding: "14px 20px",
            textTransform: "uppercase",
          }}
        >
          Weber
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#90a2ff", fontSize: 28, letterSpacing: "0.2em" }}>
            Versicherungs- & Finanzkonzepte
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {siteSettings.brandIntro}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
