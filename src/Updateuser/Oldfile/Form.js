import React, { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import{ Container, 
    Wrapper,
    Card, 
    H1, 
    Form, 
    Label, 
    Input,
    PassWordText, Button,
    Span, Span2
  } from "./FormStyle";

const FormLogin = () => {

    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ error: false, msg:""});

    console.log(message);
    
    const url = "https://premium-crypt.onrender.com/api/login"
  const Data = {userName, password}
  console.log(url)
  console.log(Data)

  const Login = (e) => {
    e.preventDefault()
    setLoading(true)
    Axios.post(url, Data)
    .then((res) => {
      console.log(res)
      localStorage.setItem("User", JSON.stringify(res.data));
      console.log(res);

      const getId = JSON.parse(localStorage.getItem("User"));
      console.log(getId._id);
     setMessage({ error: true, msg: "successfully!" });
    setTimeout(() => {
      navigate(`/updateuser/${getId._id}`)
      window.location.reload()
    }, [2000]);
    // window.location.reload();
    }
    )
    .catch((error)=>{
      console.log(error)
      setMessage({error: false, msg: error.response.data.message});
    setLoading(false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
   }) 
    console.log(error)
    //  reset(),
  })
  }
  

  return (
    <Container>
        <Wrapper>
            <Card>
                <H1 style={{textAlign: "center"}}>Log in to your account</H1>
                <Span>Don't have an account? <Span2 to='/register'>Sign up</Span2></Span>
                <Form onSubmit={(e)=> Login(e)}>
                    <Label><MdEmail style={{marginRight:"2%" }}/>Username*</Label>
                    <Input type="text" placeholder='Username' value={userName} onChange ={(e)=>{setUserName(e.target.value)}} required/>

                    <Label><BsFillLockFill style={{marginRight:"2%" }}/>Password*</Label>
                    <Input type="password" placeholder='Qwerty123!@#' value={password} onChange ={(e)=>{setPassword(e.target.value)}} required/>
                    <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
                    <PassWordText><span style={{color: "#FF4D4D", cursor: "pointer", textDecoration: "underline"}}>Forgot your password?</span></PassWordText>
                </Form>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default FormLogin;


