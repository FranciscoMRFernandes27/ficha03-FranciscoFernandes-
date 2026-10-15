function Card({ name, type, attack, defense }) {
  return (
    <li>
      <strong>{name}</strong> ({type}) – ataque {attack}, defesa {defense}
    </li>
  );
}

export default Card;