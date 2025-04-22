import icon_hamburger from '../assets/icon_hamburger.svg';
import logo_header from '../assets/logo_header.svg';
import icon_search from '../assets/icon_search.svg';

function Header () {
  return (
    <header className='px-4 py-[16px] border-b border-[#F5F9FF0D]'>
      <div className='flex container-inner justify-between'>
        <div className='flex items-center gap-14'>
          <div className='flex gap-1.5'>
            <button>
              <img src={icon_hamburger} alt="Menu" />
            </button>
            <a href='#'>
              <img src={logo_header} alt="Logo" />
            </a>
          </div>
          <div className='hidden lg:flex items-center gap-8'>
            <button>
              <img src={icon_search} alt="Search" />
            </button>
            <nav>
              <ul className='flex gap-6'>
                {['Home', 'Game', 'Infor', 'News', 'Promotions', 'VIP'].map((item, index) => (
                  <li key={index}>
                    <a className='text-sm font-medium text-[#CAD3E1] uppercase' href='#'>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex gap-2'>
          <button className='btn btn-secondary'>Login</button>
          <button className='btn btn-primary'>Registration</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
