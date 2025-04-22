import icon_hampuger from '../assets/icon_hambuger.svg'
import logo_header from '../assets/logo_header.svg'
import icon_search from '../assets/icon_search.svg'

function Header () {
  return (
    <header className='px-4 py-[16px] border-b border-[#F5F9FF0D]'>
      <div className='flex container-inner justify-between'>
        <div className='flex items-center gap-14'>
          <div className='flex gap-1.5'>
            <button>
              <img src={icon_hampuger} />
            </button>
            <a href='#'>
              <img src={logo_header} />
            </a>
          </div>
          <div className='hidden lg:flex items-center gap-8'>
            <button>
              <img src={icon_search} />
            </button>
            <nav>
              <ul className='flex gap-6'>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>Home</a></li>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>Game</a></li>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>Infor</a></li>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>News</a></li>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>Promotions</a></li>
                <li><a className='text-sm font-medium text-[#CAD3E1] uppercase ' href='#'>VIP</a></li>
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
  )
}

export default Header