import {FiKey} from "react-icons/fi";
import "./ConfirmPassword.css";
import {useNavigate} from 'react-router-dom'

const ConfirmPassword = () => {
  const nav = useNavigate()

    const handleNavConfirm = () =>{
      nav('/dashboard/withdrawal')
    }

    return (
        <>
            <div className="ConfirmPwdBody">
                <div className="ConfirmPwdBox">
                    <div className="ConfirmPwdInfoText">
                        <p>
                            This is a secure area. Please confirm your password
                            before continuing.
                        </p>
                    </div>
                    <div className="ConfirmPwdActions">
                        <p>
                            Enter Password <span>*</span>
                        </p>
                        <div className="ConfirmPwdInputDiv">
                            <span>
                                <FiKey />
                            </span>
                            <input type="password" />
                        </div>
                        <button onClick={handleNavConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmPassword;
