import React from 'react';
import banner1 from '../assets/banner_1.png'
import banner2 from '../assets/banner_2.png'
import banner3 from '../assets/banner_3.png'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner () {
  const settings = {
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    gap: '40px',
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="my-10 px-4 lg:px-0">
      <Slider {...settings} className='triple-slide'>
        <div className='!flex flex-col-reverse lg:h-[423px] lg:flex-row bg-gradient-to-r from-[#147261] to-[#082C25] rounded-lg'>
          <div className='text-center flex-1 px-10 py-10'>
            <button className='bg-[#FFFFFF1A] rounded-[79px] py-[5px] px-[14px] text-'>Exclusive Tournament</button>
            <h2 className='text-2xl lg:text-4xl my-3.5'>Piggy Christmas Tap: €35,000 For Your Wins</h2>
            <button className='btn-banner'>JOIN AND WIN</button>
          </div>
          <img className='flex-1 mx-auto' src={banner1} />
        </div>
        <div className='!flex flex-col-reverse lg:h-[423px] lg:flex-row bg-gradient-to-r from-[#284DCE] to-[#0C1741] rounded-lg'>
          <div className='text-center flex-1 px-10 py-10'>
            <button className='bg-[#FFFFFF1A] rounded-[79px] py-[5px] px-[14px] text-'>Exclusive Tournament</button>
            <h2 className='text-2xl lg:text-4xl my-3.5'>Up to 300%</h2>
            <button className='btn-banner'>GET NOW</button>
          </div>
          <img className='flex-1 mx-auto' src={banner2} />
        </div>
        <div className='!flex flex-col-reverse lg:h-[423px] lg:flex-row bg-gradient-to-r from-[#0B467B] to-[#041B2E] rounded-lg'>
          <div className='text-center flex-1 px-10 py-10'>
            <button className='bg-[#FFFFFF1A] rounded-[79px] py-[5px] px-[14px] text-'>Exclusive Tournament</button>
            <h2 className='text-2xl lg:text-4xl my-3.5'>Win or Get Back up to €100</h2>
            <button className='btn-banner'>Discover More</button>
          </div>
          <img className='flex-1 mx-auto' src={banner3} />
        </div>
      </Slider>
    </div>
  )
}

export default Banner