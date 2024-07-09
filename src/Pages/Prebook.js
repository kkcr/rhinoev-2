import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Prebookform, Prebookformdiv, Prebookinput, Prebookmain, Rental } from './Styles/Prebook.styles'
import { useParams, useLocation } from 'react-router-dom'
import Rentalpage from '../Pages/Rentalpage'

function Prebook() {
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#Rental') {
            const rentalSection = document.getElementById('Rental');
            if (rentalSection) {
                rentalSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <Prebookmain>
                <Prebookform>
                    <Prebookformdiv>
                        <Prebookinput><input type='text' value="enter your name"></input></Prebookinput>
                        <input type='text' value="enter your name" ></input>
                    </Prebookformdiv>
                </Prebookform>
            </Prebookmain>
            <Rental id='Rental'>
                <Rentalpage>
                </Rentalpage>
            </Rental>
            <Footer />
        </>
    )
}

export default Prebook
