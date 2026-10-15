import { useState } from "react";

function Card({ name, type, attack, defense }) {
  const [hearts, setHearts] = useState(0);

  return (
    <li>
      <strong>{name}</strong> ({type}) – ataque {attack}, defesa {defense}
      {attack >= 6 && <span className="strong">Forte</span>}{" "}
      <button onClick={() => setHearts(hearts + 1)}>♥ {hearts}</button>
    </li>
  );
}

export default Card;