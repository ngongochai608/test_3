import icon_hamburger from '../../assets/icon_hamburger.svg';
import logo_header from '../../assets/logo_header.svg';
import icon_search from '../../assets/icon_search.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__menu-logo">
            <button className="header__menu-button">
              <img src={icon_hamburger} alt="Menu" />
            </button>
            <a href="#" className="header__logo">
              <img src={logo_header} alt="Logo" />
            </a>
          </div>
          <div className="header__nav header__nav--desktop">
            <button className="header__search-button">
              <img src={icon_search} alt="Search" />
            </button>
            <nav>
              <ul className="header__nav-list">
                {['Home', 'Game', 'Infor', 'News', 'Promotions', 'VIP'].map((item, index) => (
                  <li key={index} className="header__nav-item">
                    <a className="header__nav-link" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="header__right">
          <button className="header__button header__button--secondary">Login</button>
          <button className="header__button header__button--primary">Registration</button>
        </div>
      </div>
    </header>
  );
}

export default Header;