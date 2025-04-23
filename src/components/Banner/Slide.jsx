const Slide = ({ image, gradient, title, buttonText, buttonLink }) => (
  <div className={`banner__slide banner__slide--${gradient}`}>
    <div className="banner__content">
      <a className="banner__exclusive-btn">Exclusive Tournament</a>
      <h2 className="banner__title">{title}</h2>
      <a href={buttonLink} className="banner__button">{buttonText}</a>
    </div>
    <img className="banner__image" src={image} alt={`Banner: ${title}`} />
  </div>
);

export default Slide;
