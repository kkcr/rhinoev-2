import styled, { keyframes } from "styled-components";




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

export const HeroDiv1=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
alignh-items:center;
border:1px solid yellow;
padding:125px;
border-radius:35px
`;

export const  Producthead1=styled.div`
font-family:"Lato";
font-size:90px;
color:white;
opacity:0;
font-weight:900;
color:white;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:0.9s; /* Delay animation for each slide */

`;


export const Contactmail=styled.div`
display:flex;
flex-direction:column;
height:auto;
width:100%;
font-size:25px;
color:white;
opacity:0;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:1s; /* Delay animation for each slide */

`;


export const Contactnumber=styled.div`
display:flex;
height:auto;
width:100%;
font-size:25px;
color:white;
opacity:0;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:1.1s; /* Delay animation for each slide */
`;


export const Contactlaction=styled.div`
display:flex;
height:auto;
width:100%;
font-size:25px;
color:white;
opacity:0;
animation: ${slideFromRight} 1.0s ease forwards; /* Animation properties */
animation-delay:1.2s; /* Delay animation for each slide */
`;