import "./Nav_bar.css";
import logo from "../../images/Netflix-Logo-Streaming-Platform-765.png";


function Nav_bar() {
  return (
    <nav className="navbar navbar-expand-lg" id="nav_container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} id="logo_netflix" alt="Netflix Logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="a_font"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                News & Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Browse by languages
              </a>
            </li>

            {/*<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>*/}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar;
