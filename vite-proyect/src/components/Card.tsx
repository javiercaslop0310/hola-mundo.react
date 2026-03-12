import type { InterfazSostenible } from "../data/Ods";

const odsColors: Record<number, string> = {
  1: "#E5243B",
  2: "#DDA63A",
  3: "#4C9F38",
  4: "#C5192D",
  5: "#FF3A21",
  6: "#26BDE2",
  7: "#FCC30B",
  8: "#A21942",
  9: "#FD6925",
  10: "#DD1367",
  11: "#FD9D24",
  12: "#BF8B2E",
  13: "#3F7E44",
  14: "#0A97D9",
  15: "#56C02B",
  16: "#00689D",
  17: "#19486A",
};
export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  const color = odsColors[itemOds.id] ?? "#667eea";
  return (
    <div
      className="card"
      style={{
        background: color,
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "pointer",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
    >
      <h3 style={{ fontSize: "2.5rem", color: "#fff", margin: 0 }}>
        {itemOds.id}
      </h3>
      <p style={{ fontSize: "1rem", color: "#f0f0f0", margin: 0 }}>
        {itemOds.odsFav}
      </p>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          padding: "0.75rem",
          borderRadius: "8px",
          fontSize: "0.9rem",
          color: "#fff",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {itemOds.estado}
      </div>
    </div>
  );
};
