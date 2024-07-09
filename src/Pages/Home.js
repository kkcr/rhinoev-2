import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import { HeroContainer, Overlay } from '../Components/Hero/Hero.styles'
import Swiper from '../Components/SwiperComponent/Swiper'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",width:"100%" }}>
      <Header />
      <HeroContainer>
        <Overlay>
          <Hero />
        </Overlay>
      </HeroContainer>
      <Swiper/>
      <Footer/>
    </div>
  )
}

export default Home
