import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import search from "../../images/search.png";
import headerlogo from '../../images/mainlogo.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container mt-2">
          <a className="navbar-brand text-white" href="#">
            <img src={headerlogo} className="header-logo" alt="" />
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-link" aria-current="page" href="/">
                  CONTACT
                </a>
              </li>
            </ul>
            <form>
              <div>
                <input className="inp" type="search" placeholder="Search" />
                <img src={search} alt="search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
