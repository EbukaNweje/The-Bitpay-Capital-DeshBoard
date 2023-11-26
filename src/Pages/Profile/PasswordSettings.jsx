import "./Profile.css";
import {FaArrowRight} from "react-icons/fa";

const PasswordSettings = () => {
    return (
        <>
            <div className="ProfileContentPwdS">
                <div className="ProfileContentPwdSRow1">
                    <div className="ProfileContentPwdSRow1A">
                        <p>Old Password</p>
                        <input type="password" />
                    </div>
                    <div className="ProfileContentPwdSRow1B">
                        <p>New Password</p>
                        <input type="password" />
                    </div>
                </div>
                <div className="ProfileContentPwdSRow2">
                    <div className="ProfileContentPwdSRow1A">
                        <p>Confrm New Password</p>
                        <input type="password" />
                    </div>
                </div>

                <div className="ProfileContentPwdSRow4Btn">
                    <button>Update Profile</button>
                </div>
                <p className="AdvAccSettings">
                    Advance Account Setting{" "}
                    <span>
                        <FaArrowRight />
                    </span>
                </p>
            </div>
        </>
    );
};

export default PasswordSettings;
