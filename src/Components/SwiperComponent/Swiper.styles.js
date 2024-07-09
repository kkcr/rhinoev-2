import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperDiv = styled(Swiper)`
  width: 98%;
  height: 750px;
  padding: 1%;
  background-color: black;

  .swiper-pagination-bullet {
    background-color: white; /* Change the bullet color to white */
  }

  .swiper-pagination-bullet-active {
    background-color: white; /* Ensure active bullet color is also white */
  }

  .swiper-pagination-vertical {
    display: flex;
    width:min-content;
    flex-direction: column; /* Display bullets in a column */
    align-items: flex-end; /* Center bullets */
    justify-content: center; 
    transform: translateY(-50%);
    height: auto;
    gap:10px;
    padding:10px
  }
`;

export const Slide = styled(SwiperSlide)`
  border-radius: 25px;
  display: flex;
  align-items: center;
  background-image: url("https://www.pixel4k.com/wp-content/uploads/2018/09/starry-sky-stars-night-glitter-4k_1536013930.jpg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-evenly;
`;

const slideFromBottom = keyframes`
  from {
    transform: translateY(100%) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SlideImage = styled.span`
  display: block;
  width: auto;
  height: 70%; /* Set the height to ensure wrapping in the vertical direction */
  font-weight: 800;
  text-align: center;
  font-size: 80px;
  color: white;
  font-family: "Lato";
  opacity: 0;
  white-space: normal; /* Allows text to wrap to the next line */
  word-wrap: break-word; /* Ensures long words are wrapped */
  overflow-wrap: break-word; /* For wider browser support */
  writing-mode: vertical-rl; /* Sets the writing mode to vertical */
  text-orientation: mixed; /* Ensures text orientation is correct */
  transform: rotate(180deg); /* Rotate 180 degrees */
  transform-origin: center center; /* Adjust transform origin as needed */
  animation: ${slideFromBottom} 1.0s ease forwards; /* Animation properties */
  animation-delay: ${props => props.index * 0.2}s; /* Delay animation for each slide */
`;

export const SlideText = styled.span`
  width: auto;
  width: 70%; /* Set the height to ensure wrapping in the vertical direction */
  font-weight: 200;
  text-align: justify;
  font-size: 25px;
  color: white;
  font-family: "Lato";
  opacity: 0;
  animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
  animation-delay: ${props => props.index * 0.2}s; /* Delay animation for each slide */
`;
