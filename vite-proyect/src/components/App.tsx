import { Card } from "./Card";
import { odsAlumnos } from "../data/Ods";

function App() {
  return (
    <div className="container">
      <h1>Lista ODS</h1>
      <div className="grid">
        {odsAlumnos.map((item) => (
          <Card key={item.id} itemOds={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
