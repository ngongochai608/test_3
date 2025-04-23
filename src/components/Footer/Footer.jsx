import telegram from '../../assets/telegram.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitch from '../../assets/twitch.svg';
import apple from '../../assets/apple.svg';
import android from '../../assets/android.svg';
import dropdown from '../../assets/dropdown.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__help-center footer__help-center--desktop">
          <h3 className="footer__title">Help Center</h3>
          <p className="footer__description">If you have any questions?</p>
          <button className="footer__button footer__button--full">Get Answers</button>
          <ul className="footer__social-links">
            {[telegram, facebook, instagram, twitch].map((src, index) => (
              <li key={index} className="footer__social-link-item">
                <a href="#">
                  <img src={src} alt="social icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <button className="footer__dropdown">
            Games
            <img className="footer__dropdown-icon" src={dropdown} alt="dropdown" />
          </button>
          <ul className="footer__list footer__list--desktop">
            {['Game 1', 'Game 2', 'Game 3', 'Game 14'].map((game, index) => (
              <li key={index} className="footer__list-item">
                <a href="#">{game}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <button className="footer__dropdown">
            About
            <img className="footer__dropdown-icon" src={dropdown} alt="dropdown" />
          </button>
          <ul className="footer__list footer__list--desktop">
            {['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'].map((item, index) => (
              <li key={index} className="footer__list-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <button className="footer__dropdown">
            Legal Information
            <img className="footer__dropdown-icon" src={dropdown} alt="dropdown" />
          </button>
          <ul className="footer__list footer__list--desktop">
            {['General Terms & Conditions', 'Responsible Gaming Policy', 'Sports Betting Rules', 'Privacy and Cookies Policy', 'Payment Methods', 'Limits'].map((item, index) => (
              <li key={index} className="footer__list-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__apps footer__apps--desktop">
          <div className="footer__app">
            <img src={apple} alt="Mac OS app" />
            <h5>Bluechip App<br />for Mac OS</h5>
          </div>
          <div className="footer__app-list">
            {[{ src: android, text: 'Android' }, { src: apple, text: 'iOS' }].map((app, index) => (
              <div key={index} className="footer__app">
                <img src={app.src} alt={app.text} />
                <p>{app.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__help-center footer__help-center--mobile">
          <h5 className="footer__subtitle">Follow Us</h5>
          <ul className="footer__social-links footer__social-links--mobile">
            {[telegram, facebook, instagram, twitch].map((src, index) => (
              <li key={index} className="footer__social-link-item">
                <a href="#">
                  <img src={src} alt="social icon" />
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__help-box">
            <div>
              <h5 className="footer__help-title">Help Center</h5>
              <p className="footer__help-description">If you have any questions?</p>
            </div>
            <button className="footer__button">Get Answers</button>
          </div>
          <div className="footer__app-list footer__app-list--mobile">
            {[{ src: android, text: 'Android' }, { src: apple, text: 'iOS' }].map((app, index) => (
              <div key={index} className="footer__app">
                <img src={app.src} alt={app.text} />
                <div>
                  <h5 className="footer__app-title">Bluechip App</h5>
                  <p className="footer__app-description">for {app.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
