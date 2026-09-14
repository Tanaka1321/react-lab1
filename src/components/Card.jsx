function Card({ title, text }) {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </article>
  );
}

export default Card;