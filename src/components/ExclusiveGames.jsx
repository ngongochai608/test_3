import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import see_all from '../assets/see_all.svg';
import game_1 from '../assets/game_1.png';
import game_2 from '../assets/game_2.png';
import game_3 from '../assets/game_3.png';
import game_4 from '../assets/game_4.png';
import game_5 from '../assets/game_5.png';
import game_6 from '../assets/game_6.png';
import game_7 from '../assets/game_7.svg';
import game_8 from '../assets/game_8.png';
import hot_icon from '../assets/hot_icon.svg';
import new_icon from '../assets/new_icon.svg';

function ExclusiveGames() {
  return (
    <div className="mt-7 mb-8">
      <div className="flex justify-between mb-8">
        <h3 className="text-sm lg:text-3xl">Exclusive Games</h3>
        <button className="flex items-center gap-2">
          <span className="hidden lg:inline">SEE ALL</span>
          <img src={see_all} alt="See All" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 8,
          },
        }}
      >
        {[
          { src: game_1, icon: hot_icon, iconPosition: 'top-3.5 left-0' },
          { src: game_2, icon: hot_icon, iconPosition: 'top-3.5 left-0' },
          { src: game_3, icon: new_icon, iconPosition: 'top-3.5 left-0' },
          { src: game_4, icon: new_icon, iconPosition: 'top-3.5 left-0' },
          { src: game_5 },
          { src: game_6 },
          { src: game_7 },
          { src: game_8 },
          { src: game_7 },
          { src: game_8 },
        ].map((game, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={game.src} alt={`Game ${index + 1}`} />
              {game.icon && (
                <img
                  className={`absolute ${game.iconPosition}`}
                  src={game.icon}
                  alt="Icon"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExclusiveGames;
