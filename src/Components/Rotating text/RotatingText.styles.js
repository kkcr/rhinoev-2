import styled, { keyframes } from "styled-components";
export const TextWrapper = styled.div`
  box-sizing: content-box;
  width:90%;
  padding-bottom:50px;
  text-align:center;
  overflow:hidden;
  background:transparent;
  border-radius: 8px;
`;
export const TextP = styled.p`
font-size:80px;
font-family:"Lato";
position:relative;
z-index:5;
color:white;
font-weight:bold;
`;
const spinWordsAnimation = keyframes`
10%{
  transform:translateY(0%);
}
30%{
    transform:translateY(-100%);
}
60%{
    transform:translateY(-200%);
}
    90%{
    transform:translateY(-300%);
}
`;

export const Words = styled.div`
  overflow: hidden;
  height:120px;
  margin-top:-100px;
  position:relative;
z-index:5;
`;

export const Span = styled.span`
  display: block;
  height: 100%;
  position:relative;
z-index:5;
  font-family:"Lato";
  font-weight:bold;
  padding: 10px;
  font-size:80px;
  color:#ffd54d;
  animation: ${spinWordsAnimation} 12s infinite;
`;