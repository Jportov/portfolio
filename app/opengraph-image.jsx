import { ImageResponse } from "next/og";

// Imagem de preview quando o link é compartilhado (LinkedIn, WhatsApp)
export const alt = "João Victor Porto | Full Stack Developer | React · Next.js · Node.js · Django";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Edge: o runtime Node do next/og quebra no build em Windows
export const runtime = "edge";

export default async function OpengraphImage() {
  const [medium, black] = await Promise.all([
    fetch(new URL("./fonts/Outfit-500.ttf", import.meta.url)).then((res) => res.arrayBuffer()),
    fetch(new URL("./fonts/Outfit-900.ttf", import.meta.url)).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Outfit",
          color: "#f5f5f5",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(244, 63, 94, 0.22), rgba(10, 10, 10, 0) 55%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 900 }}>
          <span style={{ color: "#fb7185" }}>&lt;</span>
          VPortoDev
          <span style={{ color: "#fb7185", marginLeft: 10 }}>/&gt;</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 124,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            <span>João Victor</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #fb7185, #fdba74)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Porto
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 44, fontWeight: 500 }}>
            Full Stack Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 32,
              fontWeight: 500,
              color: "#a3a3a3",
            }}
          >
            React · Next.js · TypeScript · Node.js · Django
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: medium, weight: 500, style: "normal" },
        { name: "Outfit", data: black, weight: 900, style: "normal" },
      ],
    }
  );
}
