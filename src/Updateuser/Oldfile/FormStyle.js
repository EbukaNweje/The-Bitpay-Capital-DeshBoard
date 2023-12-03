import styled from "styled-components";
import mainslider from './mailslide.jpg'
import {Link} from 'react-router-dom'


export const Span = styled.div`
color: lightgrey;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 10px;
`;
export const Span2 = styled(Link)`
margin-left: 5px;
color: #D0464A;

`;

export const Container = styled.div`
width: 100%;
height: 85vh;
display: flex;
justify-content: center;
align-items: center;
/* position: relative; */
/* z-index: -1; */
background:linear-gradient(45deg,  #030e21cf, #031128a9), url(${mainslider});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    width: 100%;
}
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;

    @media Screen and (max-width: 768px){
        /* width: 80% */
    }
`

export const Card = styled.div`
    background: #0F192C;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    width: 400px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    /* padding: 30px 60px 50px 60px; */
    opacity: 80%;
    padding: 10px;

    @media Screen and (max-width: 768px){
    height: 76vh;
    width: 90%
    }


`

export const H1 = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 37px;
  color: rgb(255, 255, 255);
  font-family: sans-serif, monospace;
  text-align: center;
  width: 100%;

  @media Screen and (max-width: 768px){
    text-align: left;
}

`

export const Form = styled.form`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-family: sans-serif, monospace;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 1%;
    display: flex;
    align-items: center;

`
export const Input = styled.input`
    border: 1px solid #9CABDD;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
    background: transparent;
    width: 100%;
    color: #fff;
    outline-width: 0.2px;
    margin-bottom: 5%;

`

export const PassWordText = styled.div`
    min-height: 50px;
    color: white;
    font-family: sans-serif, monospace;
    font-weight: 400;
    font-size:14px;
    line-height: 24.5px; 
    margin-top: 5%;
    color: rgb(255, 114, 114);

    span {
        cursor: pointer;
        
        :hover{
        text-decoration: underline;
    }
    }
`

export const Button = styled.button`
    border: 0px;
    display: inline-block;
    background: #FF4D4D;
    box-shadow: 0px 0px 5px #FF4D4D;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

`