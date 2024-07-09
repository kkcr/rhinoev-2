import React from 'react'
import { Footercont, Footerimg, Footercon,Footerlistitem,Footerlistspan, Footerpolicy, Footerlist, Footersocial } from './Footer.styles'
import logo from '../../Assets/Images/logoHeader.png'
import { NavLink } from './Footer.styles'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


function Footer() {
  return (
    <Footercont>
        <Footerimg image={logo}>
        </Footerimg>
        <Footercon>
            <Footerpolicy>
                <Footerlist>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Privacy policy</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Refund policy</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Website policy</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Contact us</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Products</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Career (redirect to linkedin page of the compay)</a></Footerlistitem>
                            <Footerlistitem><a><Footerlistspan className='foot-list-span'>/</Footerlistspan>Rentals</a></Footerlistitem>                </Footerlist>                      
            </Footerpolicy>
            <Footersocial>
                <NavLink to="/Instagram"><Instagram sx={{fontSize:"30px"}}/></NavLink>
                <NavLink to="/Facebook"><Facebook sx={{fontSize:"30px"}} /></NavLink>
                <NavLink to="/Twitter"><Twitter sx={{fontSize:"30px"}} /></NavLink>
            </Footersocial>
        </Footercon>
    </Footercont>
  )
}

export default Footer
