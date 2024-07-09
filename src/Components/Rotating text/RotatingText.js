// RotatingText.js
import React from "react";
import { Span, TextP, TextWrapper, Words } from "./RotatingText.styles";
import { HeroButton, HeroSub } from "../Hero/Hero.styles";
function RotatingText({ theme }) {
  return (
    <TextWrapper>
      <TextP>Let's Elevate your ride experience with Rhyno<br/>Where Superiority meets</TextP><br/>
      <Words>
        <Span>Style</Span>
        <Span>Elegance</Span>
        <Span>Minimalism</Span>
        <Span>Comfort</Span>
      </Words><br/><br/>
      <div style={{display:"flex",width:"100%", alignItems:"center",justifyContent:"center"}}>
      <HeroButton to="/Prebook">Pre-Book</HeroButton>
      <HeroButton to="/Prebook#Rental">Rental</HeroButton>
      </div>
    </TextWrapper>

  );
}

export default RotatingText;