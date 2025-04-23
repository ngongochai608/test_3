const TabItem = ({ icon, label, active = false, isMobile = false, showOnBoth = false }) => (
  <li
    className={`tabs__item ${active ? 'tabs__item--active' : ''} ${
      isMobile ? 'tabs__item--mobile' : ''
    } ${showOnBoth ? 'tabs__item--show-on-both' : ''}`}
  >
    <img src={icon} alt={label} />
    <h5 className="tabs__item-label">{label}</h5>
  </li>
);

export default TabItem;
