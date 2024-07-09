import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroDiv=styled.div`
width:100%;
height:700px;
display:flex;
align-items:center;
justify-content:center;
`;

export const HeroSub = styled.span`
display:flex;
  font-size: 18px;
  font-weight: bold;
  font-family:"Lato";
  padding-top:20px;
  color:white;
  padding-bottom:40px;
  width: 750px;
`;
export const HeroButton = styled(Link)`
color: black;
  background-color:  white;
font-family: "Lato";
display:flex;
justify-content:center;
width:150px;
margin:15px;
text-decoration:none;
font-size: 20px;
text-align:center;
cursor:pointer;
font-weight: bold;
border-radius: 15px;
padding:20px;
transition: 0.2s ease-in;
  &:hover {
    color: black;
  background-color: #ffd54d;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("https://i.pinimg.com/originals/6e/29/43/6e2943e4f3e3c186bbdb16e25a175752.jpg");
  background-position:left center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Overlay=styled.div`
  display: flex;
  padding-top:2%;
  background-color:rgb(0,0,0,0.7);
  height:96%;
  flex-direction: column;
  align-items: center;
`;