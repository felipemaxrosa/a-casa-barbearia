import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "A Casa – Barbearia | Coimbra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#1E3426",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Decoração geométrica */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1px solid rgba(245,238,225,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 120,
            width: 240,
            height: 240,
            borderRadius: "50%",
            border: "1px solid rgba(245,238,225,0.06)",
            display: "flex",
          }}
        />

        {/* Linha latão */}
        <div
          style={{
            width: 48,
            height: 3,
            backgroundColor: "#B08D57",
            marginBottom: 28,
            display: "flex",
          }}
        />

        {/* Título */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F5EEE1",
            lineHeight: 1.05,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>A Casa</span>
          <span style={{ color: "#B08D57", fontStyle: "italic" }}>
            Barbearia
          </span>
        </div>

        {/* Descrição */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(245,238,225,0.65)",
            lineHeight: 1.5,
            maxWidth: 640,
            marginBottom: 48,
            display: "flex",
          }}
        >
          Barbearia clássica no coração de Coimbra.
          Cortes de autor, barba impecável.
        </div>

        {/* Rodapé */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: "1px solid rgba(245,238,225,0.12)",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <span
            style={{ fontSize: 20, color: "rgba(245,238,225,0.45)" }}
          >
            a-casa-barbearia.vercel.app
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 18,
              color: "#B08D57",
              border: "1px solid #B08D57",
              borderRadius: 999,
              padding: "6px 20px",
            }}
          >
            Marcar corte →
          </span>
        </div>
      </div>
    ),
    size
  );
}
