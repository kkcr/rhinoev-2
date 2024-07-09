import styled from "styled-components";

export const Formcon=styled.div`
height:1000px;
width:1800px;
display:flex;
justify-content:center;
align-items:center;

`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: white;
max-width: 1000px;
max-height: 800px;
border-radius: 10px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 500px;
font-size:15px;

`;

export const Input = styled.input`
margin: 10px 0;
padding: 20px;
border-radius: 5px;
font-size:20px;
border: 1px solid yellow;
background-color: black;
color: white;
`;


export const Select = styled.select`
margin: 10px 0;
padding: 20px;
font-size:20px;
border-radius: 5px;
border: 1px solid yellow;
background-color: black;
color: white;
`;

export const Option = styled.option`
display:flex;
background-color: black;
color: white;
padding: 100px;
font-size:20px;
`;


export const Button = styled.button`
margin: 20px 0;
padding: 20px;
border-radius: 5px;
border: none;
font-size:20px;
background-color: yellow;
color: black;
cursor: pointer;

&:hover {
background-color: black;
color: yellow;
border: 1px solid yellow;

}
`;

