import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Home Run — Get your week back";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #faf6f1 0%, #f3eadc 60%, #ece4d8 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "Georgia, serif",
          color: "#2a2520",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              background: "#c7613d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            🎯
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Home Run
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: -1.5,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Get your&nbsp;
          <span style={{ color: "#c7613d", fontStyle: "italic" }}>week</span>
          &nbsp;back.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#4a4035",
            maxWidth: 820,
            lineHeight: 1.35,
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          The smart concierge for busy families in the Sharon. Errands, waits,
          queues — done.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 20,
            color: "#8a7960",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Ra&apos;anana · Herzliya · Kfar Saba · Hod HaSharon
        </div>
      </div>
    ),
    { ...size },
  );
}
