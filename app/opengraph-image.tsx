import { ImageResponse } from "next/og";

export const alt = "Rainul Hakim, Computer Science at Davidson College";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card, so a pasted link shows something rather than a blank box. */
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
          background: "#0d0d0d",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c2dc5a",
            }}
          >
            Computer Science, Davidson College
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1,
              marginTop: 28,
              color: "#f5f5f0",
              letterSpacing: -5,
            }}
          >
            Rainul Hakim
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 34, color: "#f5f5f0" }}>
            i like building sometimes.
          </div>
          <div style={{ fontSize: 26, color: "#9a9a92" }}>
            Machine learning research at FRIB · rainulhakim.vercel.app
          </div>
        </div>
      </div>
    ),
    size
  );
}
