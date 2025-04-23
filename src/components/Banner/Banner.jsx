import React from 'react';
import banner1 from '../../assets/banner_1.png';
import banner2 from '../../assets/banner_2.png';
import banner3 from '../../assets/banner_3.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import Slide from './Slide';

function Banner() {
  const settings = {
    centerMode: true,
    centerPadding: '310px',
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerPadding: '110px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '60px',
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
      gradient: 'gradient1',
      title: 'Piggy Christmas Tap: €35,000 For Your Wins',
      buttonText: 'JOIN AND WIN',
      buttonLink: '#'
    },
    {
      image: banner2,
      gradient: 'gradient2',
      title: 'Up to 300%',
      buttonText: 'GET NOW',
      buttonLink: '#'
    },
    {
      image: banner3,
      gradient: 'gradient3',
      title: 'Win or Get Back up to €100',
      buttonText: 'Discover More',
      buttonLink: '#'
    }
  ];

  return (
    <div className="banner">
      <Slider {...settings} className="banner__slider">
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
