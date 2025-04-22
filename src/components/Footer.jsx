import telegram from '../assets/telegram.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitch from '../assets/twitch.svg'
import apple from '../assets/apple.svg'
import androind from '../assets/androind.svg'
import dropdown from '../assets/dropdown.svg'

function Footer () {
  return (
    <footer className='bg-[#12294A] py-14 px-4'>
      <div className='flex flex-col lg:flex-row container-inner justify-between'>
        <div className='hidden lg:block'>
          <h3 className='mb-2'>Help Center</h3>
          <p className='mb-4'>If you have any questions?</p>
          <button className="btn btn-full btn-third uppercase mb-10">get answers</button>
          <div>
            <ul className='flex gap-6'>
              <li><a href="#"><img src={telegram} /></a></li>
              <li><a href="#"><img src={facebook} /></a></li>
              <li><a href="#"><img src={instagram} /></a></li>
              <li><a href="#"><img src={twitch} /></a></li>
            </ul>
          </div>
        </div>
        <div>
          <button className='flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent'>Games <img className='lg:hidden' src={dropdown} /></button>
          <ul className='hidden lg:flex flex-col gap-5'>
            <li><a href='#'>Game 1</a></li>
            <li><a href='#'>Game 2</a></li>
            <li><a href='#'>Game 3</a></li>
            <li><a href='#'>Game 14</a></li>
          </ul>
        </div>
        <div>
          <button className='flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent'>About <img className='lg:hidden' src={dropdown} /></button>
          <ul className='hidden lg:flex flex-col gap-5'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Promotions</a></li>
            <li><a href='#'>VIP</a></li>
            <li><a href='#'>Help Center</a></li>
            <li><a href='#'>Awards & Certificates</a></li>
            <li><a href='#'>App</a></li>
          </ul>
        </div>
        <div>
          <button className='flex items-center justify-between mb-5 bg-[#1A3157] w-full text-left px-[15px] py-[13px] rounded-[10px] lg:px-0 lg-py-0 lg:bg-transparent'>Legal Information <img className='lg:hidden' src={dropdown} /></button>
          <ul className='hidden lg:flex flex-col gap-5'>
            <li><a href='#'>General Terms & Conditions</a></li>
            <li><a href='#'>Responsible Gaming Policy</a></li>
            <li><a href='#'>Sports Betting Rules</a></li>
            <li><a href='#'>Privacy and Cookies Policy</a></li>
            <li><a href='#'>Payment Methods</a></li>
            <li><a href='#'>Limits</a></li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <div className='flex px-2.5 py-1.5 rounded-lg bg-[#1A3157] mb-2'>
            <img src={apple} />
            <h5>Bluechip App<br/>for Mac OS</h5>
          </div>
          <div className='flex gap-2'>
            <div className='flex items-center flex-1 flex-col px-2.5 py-1.5 rounded-lg bg-[#1A3157]'>
              <img src={androind} />
              <p>Android</p>
            </div>
            <div className='flex items-center flex-1 flex-col px-2.5 py-1.5 rounded-lg bg-[#1A3157]'>
              <img src={apple} />
              <p>iOS</p>
            </div>
          </div>
        </div>
        <div className='block lg:hidden'>
          <h5 className='text-center mb-5'>Follow Us</h5>
          <div className='mb-20'>
            <ul className='flex justify-center gap-6'>
              <li><a href="#"><img src={telegram} /></a></li>
              <li><a href="#"><img src={facebook} /></a></li>
              <li><a href="#"><img src={instagram} /></a></li>
              <li><a href="#"><img src={twitch} /></a></li>
            </ul>
          </div>
          <div className='flex justify-between items-center px-6 py-2.5 rounded-lg bg-[#1A3157] mb-4'>
            <div>
              <h5 className='text-[15px]'>Help Center</h5>
              <p className='text-[13px]'>If you have any questions?</p>
            </div>
            <div>
              <button className='btn btn-third uppercase text-[13px]'>get answers</button>
            </div>
          </div>
          <div>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center flex-1 px-3 py-2 rounded-lg bg-[#1A3157]'>
              <img src={androind} />
              <div>
                <h5 className='text-[15px]'>Bluechip App</h5>
                <p className='text-[13px]'>for Android</p>
              </div>
            </div>
              <div className='flex justify-center items-center flex-1 px-3 py-2 rounded-lg bg-[#1A3157]'>
                <img src={apple} />
                <div>
                  <h5 className='text-[15px]'>Bluechip App</h5>
                  <p className='text-[13px]'>for iOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer