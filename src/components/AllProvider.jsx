import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import see_all from '../assets/see_all.svg';
import provider_1 from '../assets/provider_1.svg';
import provider_2 from '../assets/provider_2.svg';
import provider_3 from '../assets/provider_3.svg';
import provider_4 from '../assets/provider_4.svg';
import provider_5 from '../assets/provider_5.svg';
import provider_6 from '../assets/provider_6.svg';
import provider_7 from '../assets/provider_7.svg';
import provider_8 from '../assets/provider_8.svg';

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
    <div className="mb-10">
      <div className="flex justify-between mb-8">
        <h3 className="text-sm lg:text-3xl">Exclusive Games</h3>
        <button className="flex items-center gap-2">
          <span className="hidden lg:inline">SEE ALL</span>
          <img src={see_all} alt="See All" />
        </button>
      </div>

      <div className="max-w-[1332px] mx-auto">
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
              <div className="bg-[#12294A] rounded-lg flex flex-col h-[122px]">
                <div className="flex items-center py-4 flex-1">
                  <img className="mx-auto" src={provider.src} alt={provider.name} />
                </div>
                <a
                  href="#"
                  className="flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]"
                >
                  <h5 className="text-[13px]">{provider.name}</h5>
                  <p className="text-[11px]">{provider.games}</p>
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
