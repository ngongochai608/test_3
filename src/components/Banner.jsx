import React from 'react';
import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner () {
  const settings = {
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          centerPadding: '0',
        }
      }
    ]
  };

  const slides = [
    {
      image: banner1,
      gradient: 'from-[#147261] to-[#082C25]',
      title: 'Piggy Christmas Tap: €35,000 For Your Wins',
      buttonText: 'JOIN AND WIN',
      buttonLink: '#'
    },
    {
      image: banner2,
      gradient: 'from-[#284DCE] to-[#0C1741]',
      title: 'Up to 300%',
      buttonText: 'GET NOW',
      buttonLink: '#'
    },
    {
      image: banner3,
      gradient: 'from-[#0B467B] to-[#041B2E]',
      title: 'Win or Get Back up to €100',
      buttonText: 'Discover More',
      buttonLink: '#'
    }
  ];

  return (
    <div className="my-10 px-4 lg:px-0">
      <Slider {...settings} className='triple-slide'>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`!flex flex-col-reverse lg:h-[423px] lg:flex-row bg-gradient-to-r ${slide.gradient} rounded-lg`}
          >
            <div className='text-center w-[100%] lg:w-[50%] px-10 py-10'>
              <button className='bg-[#FFFFFF1A] rounded-[79px] py-[5px] px-[14px]'>Exclusive Tournament</button>
              <h2 className='font-extrabold text-2xl lg:text-4xl my-3.5'>{slide.title}</h2>
              <button className='btn-banner'>{slide.buttonText}</button>
            </div>
            <img className='w-[50%] mx-auto' src={slide.image} alt={slide.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
