import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import see_all from '../../assets/see_all.svg';
import provider_1 from '../../assets/provider_1.svg';
import provider_2 from '../../assets/provider_2.svg';
import provider_3 from '../../assets/provider_3.svg';
import provider_4 from '../../assets/provider_4.svg';
import provider_5 from '../../assets/provider_5.svg';
import provider_6 from '../../assets/provider_6.svg';
import provider_7 from '../../assets/provider_7.svg';
import provider_8 from '../../assets/provider_8.svg';
import './AllProvider.css';

const providers = [
  { src: provider_1, name: 'Evolution', games: '312 games' },
  { src: provider_2, name: 'Spribe', games: '12 games' },
  { src: provider_3, name: 'VeliPlay', games: '9 games' },
  { src: provider_4, name: 'Turbo Games', games: '36 games' },
  { src: provider_5, name: 'SmartSoft', games: '37 games' },
  { src: provider_6, name: 'Evolution', games: '312 games' },
  { src: provider_7, name: '100HP Gaming', games: '166 games' },
  { src: provider_8, name: 'Wazdan', games: '199 games' },
];

function AllProvider() {
  return (
    <div className="all-provider">
      <div className="all-provider__header">
        <h3 className="all-provider__title">Exclusive Games</h3>
        <button className="all-provider__see-all">
          <span className="all-provider__see-all-text">SEE ALL</span>
          <img src={see_all} alt="See All" />
        </button>
      </div>

      <div className="all-provider__swiper-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          loop={true}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 8,
            },
          }}
        >
          {providers.map((provider, index) => (
            <SwiperSlide key={index}>
              <div className="all-provider__card">
                <div className="all-provider__card-image-container">
                  <img className="all-provider__card-image" src={provider.src} alt={provider.name} />
                </div>
                <a href="#" className="all-provider__card-link">
                  <h5 className="all-provider__card-name">{provider.name}</h5>
                  <p className="all-provider__card-games">{provider.games}</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AllProvider;
