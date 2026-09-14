function Header({ organization }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">{organization}</h1>
      </div>
    </header>
  );
}

export default Header;