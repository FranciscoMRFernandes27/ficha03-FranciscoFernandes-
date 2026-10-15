import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Balão fino", type: "Criatura", attack: 1, defense: 20 },
  { name: "Peixe fino", type: "Criatura", attack: 3, defense: 5 },
  { name: "Aranha Royal", type: "Criatura", attack: 8, defense: 5 },
];

function App() {
  const [typeFilter, setTypeFilter] = useState("Todas");
  const [search, setSearch] = useState("");

  const visibleCards = cards
    .filter((card) => typeFilter === "Todas" || card.type === typeFilter)
    .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <h1>A minha coleção</h1>
      <p>
        Tenho {cards.length} cartas ({visibleCards.length} à vista)
      </p>

      <div>
        <button onClick={() => setTypeFilter("Todas")}>Todas</button>
        <button onClick={() => setTypeFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setTypeFilter("Feitiço")}>Só feitiços</button>
      </div>

      <p>
        <input
          type="text"
          placeholder="Pesquisar pelo nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </p>

      <ul>
        {visibleCards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            type={card.type}
            attack={card.attack}
            defense={card.defense}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;