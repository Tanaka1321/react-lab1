function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__link">Главная</a>
        <a href="#services" className="navbar__link">Услуги</a>
        <a href="#about" className="navbar__link">О нас</a>
        <a href="#contacts" className="navbar__link">Контакты</a>
      </div>
    </nav>
  );
}

export default Navbar;