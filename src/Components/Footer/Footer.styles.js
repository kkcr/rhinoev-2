import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footercont=styled.div`
background-color:black;
height:100%;
padding:20px 0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`;

export const Footerimg=styled.div`
background-image:url(${(props)=>props.image});
background-size:contain;
background-repeat:no-repeat;
width:60%;
height:150px;
`;

export const Footercon=styled.div`
width:60%;
height:100px;
display:flex;
align-items:center;
`;

export const Footerpolicy=styled.div`
    height:100px;
    display: flex;
    flex-direction: column;
    width:700px;
`;


export const Footerlist=styled.ul`
    color:white;
    display: flex;
    list-style-position: inside;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: flex-start;
    padding-left: 20px;
    margin-bottom: 1px;
`;

export const Footerlistitem=styled.li`
    margin-right: 8px;
    font-size:20px;
    list-style-type: none;
    &:before{margin-right: 2px;
    display: inline-block;
    font-family: 'Franklin Gothic', 'Arial', sans-serif; 
    transition:text-decoration 0.3s ease;}
    &:hover{color: yellow;
    text-decoration:underline;};
`;

export const Footerlistspan=styled.span`
    font-weight: bolder;
    font-size: 21px;
    margin-right: 5px;
    color:yellow;
`;

export const Footersocial=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

export const NavLink=styled(Link)`
font-family:"Lato";
color:${(props)=>props.active===true?"#FFF225":"white"};
text-decoration:none;
font-weight:600;
padding:10px;
transition:color 0.3s ease-in;
&:hover{
color:#FFF225
}
`;