import Card from './Card';

function CardList({ items }) {
  return (
    <section className="card-list">
      <div className="container">
        <div className="card-list__grid">
          {items.map((item) => (
            <Card key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;