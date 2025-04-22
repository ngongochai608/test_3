import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import see_all from '../assets/see_all.svg';
import provider_1 from '../assets/provider_1.svg'
import provider_2 from '../assets/provider_2.svg'
import provider_3 from '../assets/provider_3.svg'
import provider_4 from '../assets/provider_4.svg'
import provider_5 from '../assets/provider_5.svg'
import provider_6 from '../assets/provider_6.svg'
import provider_7 from '../assets/provider_7.svg'
import provider_8 from '../assets/provider_8.svg'

function AllProvider () {
  return (
    <div className='mb-10'>
      <div className='flex justify-between mb-8'>
        <h3 className='text-sm lg:text-3xl'>Exclusive Games</h3>
        <button className='flex items-center gap-2'><span className='hidden lg:inline'>SEE ALL</span> <img src={see_all} /></button>
      </div>
      <div className='max-w-[1332px] mx-auto'>
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
              slidesPerView: 8
            }
          }}
        >
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_1} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>Evolution</h5>
                  <p className='text-[11px]'>312 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_2} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>Spribe</h5>
                  <p className='text-[11px]'>12 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_3} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>VeliPlay</h5>
                  <p className='text-[11px]'>9 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_4} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>Turbo Games</h5>
                  <p className='text-[11px]'>36 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_5} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>SmartSoft</h5>
                  <p className='text-[11px]'>37 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_6} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>Evolution</h5>
                  <p className='text-[11px]'>312 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_7} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>100HP Gaming</h5>
                  <p className='text-[11px]'>166 games</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#12294A] rounded-lg flex flex-col h-[122px]'>
              <div className='flex items-center py-4 flex-1'>
                <img className='mx-auto' src={provider_8} />
              </div>
              <a href='#' className='flex flex-col items-center underline justify-center bg-[#F5F9FF0D] text-center h-[54px]'>
                  <h5 className='text-[13px]'>Wazdan</h5>
                  <p className='text-[11px]'>199 games</p>
              </a>
            </div>
          </SwiperSlide>        
        </Swiper>
      </div>
    </div>
  )
}

export default AllProvider