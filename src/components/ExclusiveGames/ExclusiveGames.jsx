import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import see_all from '../../assets/see_all.svg';
import game_1 from '../../assets/game_1.png';
import game_2 from '../../assets/game_2.png';
import game_3 from '../../assets/game_3.png';
import game_4 from '../../assets/game_4.png';
import game_5 from '../../assets/game_5.png';
import game_6 from '../../assets/game_6.png';
import game_7 from '../../assets/game_7.svg';
import game_8 from '../../assets/game_8.png';
import hot_icon from '../../assets/hot_icon.svg';
import new_icon from '../../assets/new_icon.svg';
import './ExclusiveGames.css';

const games = [
  { src: game_1, icon: hot_icon },
  { src: game_2, icon: hot_icon },
  { src: game_3, icon: new_icon },
  { src: game_4, icon: new_icon },
  { src: game_5 },
  { src: game_6 },
  { src: game_7 },
  { src: game_8 },
  { src: game_7 },
  { src: game_8 },
];

function ExclusiveGames() {
  return (
    <div className="exclusive-games">
      <div className="exclusive-games__header">
        <h3 className="exclusive-games__title">Exclusive Games</h3>
        <button className="exclusive-games__see-all">
          <span className="exclusive-games__see-all-text">SEE ALL</span>
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
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="exclusive-games__card">
              <img className="exclusive-games__card-image" src={game.src} alt={`Game ${index + 1}`} />
              {game.icon && (
                <img
                  className="exclusive-games__card-icon"
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
