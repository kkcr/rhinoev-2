import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer=styled.div`
height:80px;
width:100%;
background-color:black;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 0px;
`;

export const LeftContainer=styled.div`
width:20%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
`;

export const Logo=styled.div`
height:100%;
width:50%;
cursor:pointer;
background-image:url(${(props)=>props.logo});
background-size:contain;
background-repeat:no-repeat;
`;

export const RightContainer=styled.div`
width:50%;
overflow:hidden;
height:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
gap:1rem;
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

export const NavBarExtendedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  padding: 30px;
  height: 350px;
  border-radius: 25px;
  position: fixed;
  top: 100px;
  z-index:10;
  left: 15%;
  box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.5);
  background-color: white;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;


export const ProductDiv=styled.div`
display:flex;
flex-direction:column;
height:100%;
width:350px;
align-items:center;
justify-content:center;
border-right:2px solid black;
gap:2rem;
cursor:pointer;
`;

export const ProductImage=styled.div`
width:90%;
height:70%;
cursor:pointer;
background-image:url(${(props)=>props.image});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`;

export const ProductText=styled.span`
font-family:"Lato";
font-weight:600;
font-size:30px;
cursor:pointer;
`;


export const CompareAll=styled(Link)`
width:80px;
padding:20px;
text-align:center;
background-color:black;
color:#FFF225;
font-family:"Lato";
font-size:15px;
font-weight:800;
border-radius:25px;
text-decoration:none;
transition:background-color 0.3s ease, color 0.3s ease;
&:hover{
background-color:#fff225;
color:black;
}
`;
