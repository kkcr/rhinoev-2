import React from 'react'
import { Aboutmain } from './Styles/Aboutus.styles'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { HeroContainer, HeroDiv, ProductDesc } from './Styles/product.styles'
import { Overlay } from '../Components/Hero/Hero.styles'
import { Contactmail, Producthead1,HeroDiv1, Contactnumber, Contactlaction } from './Styles/Contact.styles'


function Aboutus() {
  return (
    <Aboutmain>
      <Header />
      <HeroContainer>
        <Overlay style={{ width: "100%", justifyContent: "center" }}>
          <HeroDiv1 >
            <Producthead1>Contact Us</Producthead1>
            <Contactmail>
              Mail Us  : info@rhyno.in<br>
              </br>
              <Contactnumber> Mobile numnber  : +91-9023987528</Contactnumber>
             <Contactlaction>
              Location  : Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India
              </Contactlaction>
            </Contactmail>
          </HeroDiv1>
        </Overlay>
      </HeroContainer>
      <Footer />
    </Aboutmain>
  )
}

export default Aboutus
