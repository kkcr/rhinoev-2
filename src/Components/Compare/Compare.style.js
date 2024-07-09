import styled from "styled-components";

export const Comparemain=styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;

export const Div=styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:url("https://www.pixel4k.com/wp-content/uploads/2018/09/starry-sky-stars-night-glitter-4k_1536013930.jpg.webp");
background-size:cover;
background-repeat:no-repeat;
`;

export const Comparetablediv=styled.div`
height:100%;
background-color:black;
padding:20px;
width:60%;
box-shadow:4px 8px 20px rgba(0,0,0,0.5);
margin:45px;
margin-bottom:15px;
border-radius:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:3rem;
`;

export const Comparetabletitle=styled.div`
font-size:40px;
padding-top:10px;
display:flex;
font-weight:900;
font-family:"Lato";
justify-content:center;
width:100%;
color:white;
padding-bottom:20px;
`;


export const Comparetable=styled.div`
justify-content:center;
align-items:center;
display:flex;
width:100%;
`;


export const Comparetablerow=styled.div`
text-align:center;
font-size:20px;
width:100%;
color:white;
font-weight:900;
font-family:"Lato";
border-right:1px solid gray;
`;


export const Comparetablehead=styled.div`
font-size:20px;
width:100%;
color:white;
font-weight:900;
text-align:center;
font-family:"Lato";
`;


export const Comparebutton=styled.div`
height:65px;
width:210px;
border:1px solid white;
font-size:20px;
border-radius:15px;
color:white;
font-weight:900;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;
margin-bottom:20px;
margin-top:5px;
transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
&:hover{
background-color:black;
color:yellow;
border:1.5px solid yellow;
}
`;