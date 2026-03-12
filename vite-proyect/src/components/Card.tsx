import type { InterfazSostenible } from "../data/Ods";

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  return (
    <div
      className="card"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minWidth: "250px",
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
