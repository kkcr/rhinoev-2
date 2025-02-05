import React from 'react'
import { Rentalhead, Rentalheadcont, Rentalheadright, Rentalmain, NavLink } from './Styles/Rentalmain.styles';
import { Android,Apple } from '@mui/icons-material';

function Rentalpage() {
  return (
    <Rentalmain>
        <Rentalhead>
            <Rentalheadright>Rentals</Rentalheadright>
            <Rentalheadcont>
                Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
                Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
                <br></br>Download our rental app :
            <Rentalheadcont style={{flexDirection:"row",height:"50px",justifyContent:"flex-start"}}>
            <NavLink to="https://www.google.com" target="_blank" rel="noopener noreferrer"><Android sx={{paddingRight:"10px"}}/></NavLink>|<NavLink to="https://www.google.com" target="_blank" rel="noopener noreferrer"><Apple sx={{paddingLeft:"10px"}}/></NavLink>
            </Rentalheadcont>
            </Rentalheadcont>
        </Rentalhead>
    </Rentalmain>
  )
}

export default Rentalpage
