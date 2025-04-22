import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitch from '../assets/twitch.svg';
import apple from '../assets/apple.svg';
import android from '../assets/android.svg';
import dropdown from '../assets/dropdown.svg';

function Footer() {
  return (
    <footer className="bg-[#12294A] py-14 px-4">
      <div className="flex flex-col lg:flex-row container-inner justify-between">
        <div className="hidden lg:block">
          <h3 className="mb-2">Help Center</h3>
          <p className="mb-4">If you have any questions?</p>
          <button className="btn btn-full btn-third uppercase mb-10">get answers</button>
          <ul className="flex gap-6">
            {[telegram, facebook, instagram, twitch].map((src, index) => (
              <li key={index}>
                <a href="#">
                  <img src={src} alt="social icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent">
            Games
            <img className="lg:hidden" src={dropdown} alt="dropdown" />
          </button>
          <ul className="hidden lg:flex flex-col gap-5">
            {['Game 1', 'Game 2', 'Game 3', 'Game 14'].map((game, index) => (
              <li key={index}><a href="#">{game}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <button className="flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent">
            About
            <img className="lg:hidden" src={dropdown} alt="dropdown" />
          </button>
          <ul className="hidden lg:flex flex-col gap-5">
            {['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'].map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <button className="flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent">
            Legal Information
            <img className="lg:hidden" src={dropdown} alt="dropdown" />
          </button>
          <ul className="hidden lg:flex flex-col gap-5">
            {['General Terms & Conditions', 'Responsible Gaming Policy', 'Sports Betting Rules', 'Privacy and Cookies Policy', 'Payment Methods', 'Limits'].map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="flex px-2.5 py-1.5 rounded-lg bg-[#1A3157] mb-2">
            <img src={apple} alt="Mac OS app" />
            <h5>Bluechip App<br />for Mac OS</h5>
          </div>
          <div className="flex gap-2">
            {[{ src: android, text: 'Android' }, { src: apple, text: 'iOS' }].map((app, index) => (
              <div key={index} className="flex items-center flex-1 flex-col px-2.5 py-1.5 rounded-lg bg-[#1A3157]">
                <img src={app.src} alt={app.text} />
                <p>{app.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <h5 className="text-center mb-5">Follow Us</h5>
          <ul className="flex justify-center gap-6 mb-20">
            {[telegram, facebook, instagram, twitch].map((src, index) => (
              <li key={index}>
                <a href="#">
                  <img src={src} alt="social icon" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center px-6 py-2.5 rounded-lg bg-[#1A3157] mb-4">
            <div>
              <h5 className="text-[15px]">Help Center</h5>
              <p className="text-[13px]">If you have any questions?</p>
            </div>
            <div>
              <button className="btn btn-third uppercase text-[13px]">get answers</button>
            </div>
          </div>

          <div className="flex gap-2">
            {[{ src: android, text: 'Android' }, { src: apple, text: 'iOS' }].map((app, index) => (
              <div key={index} className="flex justify-center items-center flex-1 px-3 py-2 rounded-lg bg-[#1A3157]">
                <img src={app.src} alt={app.text} />
                <div>
                  <h5 className="text-[15px]">Bluechip App</h5>
                  <p className="text-[13px]">for {app.text}</p>
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
