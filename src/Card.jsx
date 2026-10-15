function Card({ name, type, attack, defense }) {
  return (
    <li>
      <strong>{name}</strong> ({type}) – ataque {attack}, defesa {defense}
      {attack >= 6 && <span className="strong">Forte</span>}
    </li>
  );
}

export default Card;