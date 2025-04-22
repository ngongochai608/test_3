import see_all from '../assets/see_all.svg';
import game_1 from '../assets/game_1.png'
import game_2 from '../assets/game_2.png'
import game_3 from '../assets/game_3.png'
import game_4 from '../assets/game_4.png'
import game_5 from '../assets/game_5.png'
import game_6 from '../assets/game_6.png'
import game_7 from '../assets/game_7.svg'
import game_8 from '../assets/game_8.png'
import game_9 from '../assets/game_9.png'
import game_10 from '../assets/game_10.png'
import hot_icon from '../assets/hot_icon.svg'
import new_icon from '../assets/new_icon.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function ExclusiveGames () {
  return (
    <div className='mt-7 mb-8'>
      <div className='flex justify-between mb-8'>
        <h3 className='text-sm lg:text-3xl'>Exclusive Games</h3>
        <button className='flex items-center gap-2'><span className='hidden lg:inline'>SEE ALL</span> <img src={see_all} /></button>
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
            slidesPerView: 8
          }
        }}
      >
        <SwiperSlide>
          <div className='relative'>
            <img src={game_1} />
            <img className='absolute top-3.5 left-0' src={hot_icon} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_2} />
            <img className='absolute top-3.5 left-0' src={hot_icon} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_3} />
            <img className='absolute top-3.5 left-0' src={new_icon} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_4} />
            <img className='absolute top-3.5 left-0' src={new_icon} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_6} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_7} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_8} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_7} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={game_8} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExclusiveGames