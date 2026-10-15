// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).

import Card from "./Card.jsx";
import { useState } from "react";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Balão fino", type: "Criatura", attack: 1, defense: 20 },
  { name: "Peixe fino", type: "Criatura", attack: 3, defense: 5 },
  { name: "Aranha Royal", type: "Criatura", attack: 8, defense: 5 },
];


function App() {
    const [search, setSearch] = useState("");

const visibleCards = cards
  .filter((card) => typeFilter === "Todas" || card.type === typeFilter)
  .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <main>
      <h1>A minha coleção</h1>
      <p>
  <input
    type="text"
    placeholder="Pesquisar pelo nome..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</p>

<div>
  <button onClick={() => setTypeFilter("Todas")}>Todas</button>
  <button onClick={() => setTypeFilter("Criatura")}>Só criaturas</button>
  <button onClick={() => setTypeFilter("Feitiço")}>Só feitiços</button>
</div>

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
