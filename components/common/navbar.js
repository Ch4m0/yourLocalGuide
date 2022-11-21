

export default function Navbar() {

  return (
    <nav  className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu has-background-black">
        <div className="navbar-start">

          <a className="navbar-item">Home</a>

          <a className="navbar-item">Destinations</a>

          <div className="navbar-item has-dropdown is-hoverable">

            <a className="navbar-link">How it works</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">I am traveller</a>
              <a className="navbar-item">I am Guide</a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
