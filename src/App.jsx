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
  const [sortByAttack, setSortByAttack] = useState(false);
  const [randomCard, setRandomCard] = useState(null);

  let visibleCards = cards
    .filter((card) => typeFilter === "Todas" || card.type === typeFilter)
    .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

  if (sortByAttack) {
    // cópia para não mexer no array original
    visibleCards = [...visibleCards].sort((a, b) => b.attack - a.attack);
  }

  function pickRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    setRandomCard(cards[index]);
  }

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
        <button onClick={() => setSortByAttack(!sortByAttack)}>
          {sortByAttack ? "Ordem original" : "Ordenar por ataque"}
        </button>
        <button onClick={pickRandomCard}>Carta à sorte</button>
      </div>

      <p>
        <input
          type="text"
          placeholder="Pesquisar pelo nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </p>

      {randomCard && (
        <>
          <h2>Carta à sorte</h2>
          <ul>
            <Card
              key={randomCard.name}
              name={randomCard.name}
              type={randomCard.type}
              attack={randomCard.attack}
              defense={randomCard.defense}
            />
          </ul>
        </>
      )}

      {visibleCards.length === 0 && <p>Nenhuma carta encontrada.</p>}

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