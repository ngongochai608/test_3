import diamon from '../assets/diamon.png';
import vip from '../assets/vip.png';
import promotion from '../assets/promotion.png';
import hot_match from '../assets/hot_match.png';
import transaction from '../assets/transaction.png';
import games from '../assets/games.svg';
import provider from '../assets/provider.svg';
import icon_search from '../assets/icon_search.svg';

const TabItem = ({ icon, label, active = false, isMobile = false, showOnBoth = false }) => (
  <li
    className={`cursor-pointer flex gap-3 items-center justify-center flex-1 border border-[#FFFFFF1A] rounded-lg py-4 ${
      active ? 'bg-[#12294A]' : ''
    } ${isMobile ? 'lg:hidden' : ''} ${showOnBoth ? 'lg:flex' : 'hidden lg:flex'}`}
  >
    <img src={icon} alt={label} />
    <h5 className='text-base font-normal'>{label}</h5>
  </li>
);

function Tabs() {
  return (
    <div>
      <ul className='flex gap-2.5 border-[#F5F9FF0D] border-b pb-7'>
        <TabItem icon={diamon} label="Diamond mine" />
        <TabItem icon={vip} label="VIP" />
        <TabItem icon={promotion} label="Promotion" />
        <TabItem icon={hot_match} label="Hot Match" />
        <TabItem icon={transaction} label="P2P Transaction" />
        <TabItem icon={icon_search} label="Search" isMobile active={true} />
        <TabItem icon={games} label="Games" active={true} showOnBoth={true} />
        <TabItem icon={provider} label="Providers" active={true} showOnBoth={true} />
      </ul>
    </div>
  );
}

export default Tabs;

