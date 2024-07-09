import React from 'react'
import { Aboutmain } from './Styles/Aboutus.styles'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import { HeroContainer, HeroDiv, ProductDesc, Producthead } from './Styles/product.styles'
import { Overlay } from '../Components/Hero/Hero.styles'


function Aboutus() {
  return (
    <Aboutmain>
      <Header />
      <HeroContainer>
        <Overlay style={{ width: "100%", justifyContent: "center" }}>
          <HeroDiv style={{ alignItems: "center",width:"60%" }}>
            <Producthead>About US</Producthead>
            <ProductDesc>
              Established in 2019 by an automotive engineer with a vision for sustainable and robust
              mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
              of young individuals passionately driving innovation in the electric vehicle industry. We
              believe in engineering solutions that solve problems.
            </ProductDesc>
            <ProductDesc style={{animationDelay:"1.6s"}}>
              With our first product, we've taken a bold step to create something more than just a vehicle;
              it's a unique experience of elegance, comfort and style, addressing the pitfalls of
              conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
              ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
              operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
              appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
              era in sustainable and dependable electric transportation.
            </ProductDesc>
          </HeroDiv>
        </Overlay>
      </HeroContainer>
      <Footer />
    </Aboutmain>
  )
}

export default Aboutus
