import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
width:100%;
height:800px;
display:flex;
align-items:center;
justify-content:space-between;
  background-image: url("https://static.vecteezy.com/system/resources/previews/020/205/370/non_2x/abstract-black-grey-cyber-geometric-dynamic-with-blank-space-futuristic-design-modern-technology-background-vector.jpg");
  background-position:left center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const slideFromLeft= keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const ProdImage = styled.div`
width:50%;
height:80%;
opacity:0;
background-image: url(${(props) => props.back});
  background-position:right;
  background-size:${(props) => props.size};
  background-repeat: no-repeat;
  animation: ${slideFromLeft} 1.0s ease forwards; /* Animation properties */
animation-delay:1s; /* Delay animation for each slide */
`;
export const HeroDiv = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
gap:3rem;
padding:30px;
width:50%;
height:100%;
`;


const slideFromRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const Producthead = styled.span`
font-family:"Lato";
font-size:90px;
color:white;
opacity:0;
font-weight:900;
color:white;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:1s; /* Delay animation for each slide */
`;


export const ProductDesc = styled.span`
width:100%;
font-family:"Lato";
font-size:25px;
color:white;
font-weight:500;
color:white;
text-align:justify;
opacity:0;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:1.2s; /* Delay animation for each slide */
`;


export const AnimatedDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  animation: ${slideFromRight} 1.0s ease forwards;
  animation-delay: 1.4s;
`;

export const Overlay = styled.div`
padding-top:2%;
  background-color:rgb(0,0,0,0.7);
height:96%;
display:flex;
align-itemns:center;
justify-content:space-between;
`;

