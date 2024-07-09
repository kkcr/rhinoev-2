// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination'; // Import pagination styles
// import required modules
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';
import React from 'react';
import { Slide, SlideImage, SlideText, SwiperDiv } from './Swiper.styles';
import { USPdata } from '../../Data/Usp';

function Swiper() {
  return (
    <>
      <SwiperDiv
        className="swiper-container"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4500,  // Set delay time for autoplay
          disableOnInteraction: false,  // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',  // Specify the pagination element
          verticalClass: 'swiper-pagination-vertical',  // Custom class for vertical pagination
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
      >
        {USPdata.map((usp, index) => (
          <Slide key={index}>
            <SlideImage index={index}>{usp.heading}</SlideImage>
            <SlideText index={index}>{usp.subHeading}</SlideText>
          </Slide>
        ))}
        {/* Add pagination element here */}
        <div className="swiper-pagination swiper-pagination-vertical" style={{ position: 'absolute', right: '10px', height: '100%' }}></div>
      </SwiperDiv>
    </>
  );
}

export default Swiper;
