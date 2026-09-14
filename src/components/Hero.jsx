function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero__title">{title}</h2>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;