import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";


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

export const Rentalmain=styled.div`
color:white;
display:flex;
justify-content:center;
align-items:center;
`;

export const Rentalhead = styled.div`
border:1px solid white;
border-radius:40px;
width:1500px;
height:600px;
display:flex;
flex-direction:row;
`;

export const Rentalheadright = styled.div`
  display: block;
  width: 300px;
  height: 100%; /* Set the height to ensure wrapping in the vertical direction */
  font-weight: 800;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  font-size: 80px;
  color: white;
  font-family: "Lato";
  white-space: normal; /* Allows text to wrap to the next line */
  word-wrap: break-word; /* Ensures long words are wrapped */
  overflow-wrap: break-word; /* For wider browser support */
  writing-mode: vertical-rl; /* Sets the writing mode to vertical */
  text-orientation: mixed; /* Ensures text orientation is correct */
  transform: rotate(180deg); /* Rotate 180 degrees */
  transform-origin: center center; /* Adjust transform origin as needed */
  animation: ${slideFromBottom} 2.7s ease forwards; /* Animation properties */
  animation-delay: ${props => props.index * 0.2}s; /* Delay animation for each slide */

`;




export const Rentalheadcont = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
font-size:20px;
  width: 70%; /* Set the height to ensure wrapping in the vertical direction */
  font-weight: 200;
  text-align: justify;
  font-size: 25px;
  color: white;
  font-family: "Lato";
  opacity: 0;
  animation: ${slideFromRight} 2.8s ease forwards; /* Animation properties */
  animation-delay: ${props => props.index * 0.2}s; /* Delay animation for each slide */
`;


export const NavLink=styled(Link)`
font-family:"Lato";
font-size:15px;
color:${(props)=>props.active===true?"#FFF225":"white"};
text-decoration:none;
font-weight:600;
transition:color 0.3s ease-in;
&:hover{
color:#FFF225
}
`;