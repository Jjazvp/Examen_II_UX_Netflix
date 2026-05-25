import "./Nav_bar.css";
import logo_netflix from "../../images/Netflix-Logo-Streaming-Platform-765.png";
import logo_search from "../../images/search-interface-symbol.png";
import logo_notifications from "../../images/notification.png";

function Nav_bar() {
  return (
    <nav className="navbar navbar-expand-lg" id="nav_container">
      <div className="container-fluid" id="container">
        <a className="navbar-brand" id="a_logo" href="#">
          <img src={logo_netflix} id="logo_netflix" alt="Netflix Logo" />
        </a>
        <button
          className="navbar-toggler nav-link dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="browse_btn"
        >
          Browse
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul_container">
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
          </ul>
        </div>
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-0"
          id="ul_container_profile"
        >
          <li className="nav-item">
            <a type="icon" className="nav-link" id="a_font" href="#">
              <img src={logo_search} alt="search logo" id="icon_format" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="a_font"
              href="#"
            >
              Kids
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_font" href="#">
              <img
                src={logo_notifications}
                alt="notifications logo"
                id="icon_format"
              />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="a_font"
            >
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                alt="profile picture"
                id="profile_picture"
              />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav_bar;
