
import './Menu.css'; // Import the CSS file with styles
import { logo } from "../assets";

const Menu = () => {
  return (
    <div>
      <nav className="custom-navbar">
        <div className="custom-container">
          <a className="custom-navbar-brand" href="#">
            <img src={logo} alt="sumz_logo" className="custom-logo" />
            
          </a>
          <input
            type="checkbox"
            id="custom-navbar-toggle"
            className="custom-navbar-toggle"
          />
          <label htmlFor="custom-navbar-toggle" className="custom-navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="custom-navbar-menu">
            <li className="custom-menu-item">
              <a className="custom-menu-link active" href="#">
                Home
              </a>
            </li>
            <li className="custom-menu-item">
              <a className="custom-menu-link" href="#">
                About
              </a>
            </li>
            <li className="custom-menu-item custom-menu-dropdown">
              <input
                type="checkbox"
                id="custom-dropdown-toggle"
                className="custom-dropdown-toggle"
              />
              <label
                htmlFor="custom-dropdown-toggle"
                className="custom-menu-link custom-dropdown-label"
              >
                More
              </label>
              <ul className="custom-dropdown-menu">
                <li className="custom-menu-item">
                  <a className="custom-menu-link" href="#">
                    Action
                  </a>
                </li>
                <li className="custom-menu-item">
                  <a className="custom-menu-link" href="#">
                    Another action
                  </a>
                </li>
                <li className="custom-menu-divider"></li>
                <li className="custom-menu-item">
                  <a className="custom-menu-link" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="custom-navbar-search">
            <input
              className="custom-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="custom-search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

