import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from "sweetalert2"
import {useNavigate} from 'react-router-dom';


const AdminLogin = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const Loggin = () =>{
    if(email !== "whitebitcrypfield" || password !== "premiumcryptassetsadmin@2023"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You are not an Admin",
         }) 
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: "Welcome back!",
         }) ;
         navigate("/updateuser")
    }
    }


  return (
    <Container>
        <Wrapper>
            <Title>Admin Update</Title>
            <Form>
                <InputHold>
                <Label>Admin Email</Label>
                    <Input value={email} onChange={(e) =>{
                        setEmail(e.target.value)
                    }} required placeholder='Admin Email'/>
                </InputHold>
                <InputHold>
                <Label>Admin Password</Label>
                    <Input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required placeholder='Admin password'/>
                </InputHold>
                <Button onClick={() => {
                    Loggin()
                }}>Login</Button>
            </Form>
        </Wrapper>
    </Container>
  )
};

export default AdminLogin;


const Button = styled.button`
width: 30%;
margin-top: 1rem;
padding: 0.7rem 0.3rem;
border: none;
border-radius: 0.4rem;
color: #1B2537;
font-weight: bold;
font-size: 16px;
text-decoration: none; 
background-color: rgb(255, 255, 255);
text-align: center;
cursor: pointer;
/* border-radius: 0%.4rem; */
`;

const Title = styled.div`
color: rgb(255, 255, 255);
font-size: 30px;
font-family: sans-serif, monospace;
font-weight: bold;
margin-bottom: 1rem;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* position: relative; */
/* z-index: -1; */
background:linear-gradient(45deg,  #000000, #000000);
background-position: center;
background-size: cover;
background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    width: 100%;
}
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;

    @media Screen and (max-width: 768px){
        /* width: 80% */
    }
`;
const Form = styled.form`
 background: #0F192C;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    width: 40%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    /* padding: 30px 60px 50px 60px; */
    opacity: 80%;
    padding: 10px;
    height: 60%;

    @media Screen and (max-width: 768px){
    height: 60%;
    width: 90%
    }

`;
const InputHold = styled.div`
display: flex;
flex-direction: column;
margin: 20px 0;
`;
const Label = styled.div`
color: rgb(255, 255, 255);
    font-size: 14px;
    font-family: sans-serif, monospace;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 1%;
`;
const Input = styled.input`
color: black;
border-radius: 0.4rem;
border: none;
padding: 1rem 0.3rem;
`;


