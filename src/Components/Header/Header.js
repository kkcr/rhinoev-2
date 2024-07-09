import React, { useState } from 'react';
import { CompareAll, HeaderContainer, LeftContainer, Logo, NavBarExtendedContainer, NavLink, ProductDiv, ProductImage, ProductText, RightContainer } from './Header.styles';
import logo from "../../Assets/Images/logoHeader.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { ProductData } from '../../Data/ProductData';

function Header() {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState([false, false, false]);

  const handleMouseEnter = () => setDropdown(true);
  const handleMouseLeave = () => setDropdown(false);

  const handleHoverEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleHoverLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const getNavLinkStyle = (hover) => ({
    backgroundColor: hover ? "#FFF225" : "black",
    padding: "10px",
    borderRadius: "25px",
    width: "40%",
    textAlign: "center",
    color: hover ? "black" : "white",
    transition: "background-color 0.3s ease, color 0.3s ease"
  });

  const handleProductClick = (index) => {
    window.open(`/Products/${index}`, "_blank", "noopener,noreferrer");
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        <Logo logo={logo} alt="Logo" onClick={() => navigate("/")} />
      </LeftContainer>
      <RightContainer>
        <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
        <NavLink to="/AboutUs" active={location.pathname === "/AboutUs"}>About Us</NavLink>
        <div 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <NavLink active={dropdown}>Products</NavLink>
          <NavBarExtendedContainer show={dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {ProductData.map((product, index) => (
              <ProductDiv key={index}>
                <ProductImage 
                  image={product.Imageurl} 
                  onClick={() => handleProductClick(index)} 
                />
                <ProductText 
                  onClick={() => handleProductClick(index)}
                >
                  {product.name}
                </ProductText>
                <NavLink
                  to="/Prebook#Rental"
                  active={location.pathname === "/"}
                  style={getNavLinkStyle(hoverStates[index])}
                  onMouseEnter={() => handleHoverEnter(index)}
                  onMouseLeave={() => handleHoverLeave(index)}
                >
                  Rent an EV
                </NavLink>
              </ProductDiv>
            ))}
            <CompareAll to="/Compare">Compare All</CompareAll>
          </NavBarExtendedContainer>
        </div>
        <NavLink to="/Contact" active={location.pathname === "/Contact"}>Contact Us</NavLink>
        <NavLink to="/Prebook" active={location.pathname === "/Prebook"}>Pre-Book</NavLink>
        <LeftContainer>
          <NavLink to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></NavLink>
          <NavLink to="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></NavLink>
          <NavLink to="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></NavLink>
        </LeftContainer>
      </RightContainer>
    </HeaderContainer>
  );
}

export default Header;
