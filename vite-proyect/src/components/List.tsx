function App() {
  let items = [
    "Tierra",
    "Criatura",
    "Instantaneo",
    "Conjuro",
    "Planeswalker",
    "Batalla",
    "Encantamiento",
    "Artefacto",
  ];

  return (
    <div>
      <ul class="list-group">
        {items.map((item) => (
          <li class="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
