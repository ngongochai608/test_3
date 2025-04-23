import React from 'react';
import diamon from '../../assets/diamon.png';
import vip from '../../assets/vip.png';
import promotion from '../../assets/promotion.png';
import hot_match from '../../assets/hot_match.png';
import transaction from '../../assets/transaction.png';
import games from '../../assets/games.svg';
import provider from '../../assets/provider.svg';
import icon_search from '../../assets/icon_search.svg';
import './Tabs.css';
import TabItem from './TabItem';

function Tabs() {
  return (
    <div className="tabs">
      <ul className="tabs__list">
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
