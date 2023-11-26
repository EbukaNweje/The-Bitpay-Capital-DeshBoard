import "./Login.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Swift-Earn-Logo.png";
import {CiMail} from "react-icons/ci";
import {FiKey} from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const nav = useNavigate()

  const handleNavToDashboard = () =>{
    nav('/dashboard')
  }

    return (
        <>
            <div className="LoginBody">
                <div className="LoginContainer">
                    <div className="LoginRight">
                        <div className="LoginTitle">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep you connected, please login with your
                                personal info
                            </p>
                        </div>
                        <div className="LoginImg">
                            <img src={LoginImg} alt="Login Image..." />
                        </div>
                    </div>
                    <div className="LoginLeft">
                        <div className="LoginLeftWrapper">
                            <div className="LoginLeftImgDiv">
                                <img src={SwiftLogo} alt="Swift Earn Logo" />
                            </div>
                            <div className="LoginLeftInputsDiv">
                                <div className="LoginLeftInputErrorDiv">
                                    <ul>
                                        <li>
                                            These credentials do not match our
                                            records
                                        </li>
                                    </ul>
                                    <span>
                                        <i
                                            className="fa-solid fa-xmark"
                                            
                                        ></i>
                                    </span>
                                </div>
                                <h2>Log in</h2>
                                <div className="LoginLeftEmailDiv">
                                    <label htmlFor="">
                                        Your Email <span>*</span>
                                    </label>
                                    <div className="LoginLeftEmailDivInputBox">
                                        <span>
                                            <CiMail className="CiMail"/>
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="LoginLeftPasswordDiv">
                                    <label htmlFor="">
                                        Password <span>*</span>
                                    </label>
                                    <div className="LoginLeftPasswordDivInputBox">
                                        <span>
                                            <FiKey className="FiKey"/>
                                        </span>
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                    </div>
                                </div>
                                <div className="LoginLeftControlDiv">
                                    <div className="LoginLeftControlDivRememberDiv">
                                        <input type="checkbox" id="remember" />
                                        <p>Remember me</p>
                                    </div>
                                    <p>Forget password?</p>
                                </div>
                                <div className="LoginLeftBtnDiv">
                                    <button onClick={handleNavToDashboard}>Sign in</button>
                                </div>
                            </div>
                            <div className="LoginLeftInfo">
                                <p className="LoginLeftInfoSignUp">
                                    Don&#39;t have an account?{" "}
                                    <span>Sign Up</span>
                                </p>
                                <p className="LoginLeftInfoRights">
                                    © Copyright 2023 &nbsp; Swift Earn Trade
                                    &nbsp; All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
