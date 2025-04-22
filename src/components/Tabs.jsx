import diamon from '../assets/diamon.png'
import vip from '../assets/vip.png'
import promotion from '../assets/promotion.png'
import hot_match from '../assets/hot_match.png'
import transaction from '../assets/transaction.png'
import games from '../assets/games.svg'
import provider from '../assets/provider.svg'
import icon_search from '../assets/icon_search.svg'

function Tabs () {
  return (
    <div>
      <ul className='flex gap-2.5 border-[#F5F9FF0D] border-b pb-7'>
        <li className='cursor-pointer hidden lg:flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4'>
          <img src={diamon} />
          <h5 className='text-base font-normal'>Diamond mine</h5>
        </li>
        <li className='cursor-pointer hidden lg:flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4'>
          <img src={vip} />
          <h5 className='text-base font-normal'>VIP</h5>
        </li>
        <li className='cursor-pointer hidden lg:flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4'>
          <img src={promotion} />
          <h5 className='text-base font-normal'>Promotion</h5>
        </li>
        <li className='cursor-pointer hidden lg:flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4'>
          <img src={hot_match} />
          <h5 className='text-base font-normal'>Hot Match</h5>
        </li>
        <li className='cursor-pointer hidden lg:flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4'>
          <img src={transaction} />
          <h5 className='text-base font-normal'>P2P Transaction</h5>
        </li>
        <li className='cursor-pointer flex lg:hidden gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4 bg-[#12294A]'>
          <img src={icon_search} />
          <h5 className='text-base font-normal'>Search</h5>
        </li>
        <li className='cursor-pointer flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4 bg-[#12294A]'>
          <img src={games} />
          <h5 className='text-base font-normal'>Games</h5>
        </li>
        <li className='cursor-pointer flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4 bg-[#12294A]'>
          <img src={provider} />
          <h5 className='text-base font-normal'>Providers</h5>
        </li>
      </ul>
    </div>
  )
}

export default Tabs