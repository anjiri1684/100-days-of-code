function Header() {
  return (
    <header className="header">
      <h1>Pricing & Plans</h1>
      <p className="header-description">
        With lots of unique blocks, you can build a page without coding. Build
        your landing page.
      </p>
      <section className="duration">
        <div className="duration-content">
          <label htmlFor="">Monthly</label>
          <input type="checkbox" />
        </div>
        <p className="yearly">
          Yearly <span className="save">SAVE 25%</span>
        </p>
      </section>
    </header>
  );
}

export default Header;
