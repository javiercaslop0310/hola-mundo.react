import { Card } from "./Card";
import { odsAlumnos } from "../data/Ods";

function App() {
  return (
    <div className="container">
      <h1
        style={{
          fontSize: "70px",
          textAlign: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        Lista ODS
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1.25rem",
          padding: "1rem 0",
        }}
      >
        {odsAlumnos.map((item) => (
          <Card key={item.id} itemOds={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
