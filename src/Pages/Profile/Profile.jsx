import {useState} from "react";
import "./Profile.css";
import PersonalSettings from "./PersonalSettings";
import WithdrawalSettings from "./WithdrawalSettings";
import PasswordSettings from "./PasswordSettings";
import OtherSettings from "./OtherSettings";
import { useSelector } from "react-redux";

const Profile = () => {
    const [showPersonalS, setShowPersonalS] = useState(true);
    const [showWithdrawalS, setShowWithdrawalS] = useState(false);
    const [showPasswordS, setShowPasswordS] = useState(false);
    const [showOtherS, setShowOtherS] = useState(false);
    const userData = useSelector((state) => state.persisitedReducer.user)

    const handleShowPersonalS = () => {
        setShowPersonalS(true);
        setShowWithdrawalS(false);
        setShowPasswordS(false);
        setShowOtherS(false);
    };
    const handleShowWithdrawalS = () => {
        setShowPersonalS(false);
        setShowWithdrawalS(true);
        setShowPasswordS(false);
        setShowOtherS(false);
    };
    const handleShowPasswordS = () => {
        setShowPersonalS(false);
        setShowWithdrawalS(false);
        setShowPasswordS(true);
        setShowOtherS(false);
    };
    const handleShowOthersS = () => {
        setShowPersonalS(false);
        setShowWithdrawalS(false);
        setShowPasswordS(false);
        setShowOtherS(true);
    };

    return (
        <>
            <div className="ProfileBody">
                <h1>Account Settings</h1>
                <div className="ProfileContent">
                    <div className="ProfileNav">
                        <div
                            className={`ProfileNav1 ${showPersonalS === true? 'active' : ''}`}
                            onClick={handleShowPersonalS}
                        >
                            Personal Settings
                        </div>
                        <div
                            className={`ProfileNav2 ${showWithdrawalS === true? 'active' : ''}`}
                            onClick={handleShowWithdrawalS}
                        >
                            Withdrawal Settings
                        </div>
                        <div
                            className={`ProfileNav3 ${showPasswordS === true? 'active' : ''}`}
                            onClick={handleShowPasswordS}
                        >
                            Password/Security
                        </div>
                        <div
                            className={`ProfileNav4 ${showOtherS === true? 'active' : ''}`}
                            onClick={handleShowOthersS}
                        >
                            Other Settings
                        </div>
                    </div>
                    <div className="ProfileMainContent">
                        {showPersonalS ? (
                            <PersonalSettings  data = {userData}/>
                        ) : showWithdrawalS ? (
                            <WithdrawalSettings />
                        ) : showPasswordS ? (
                            <PasswordSettings />
                        ) : showOtherS ? (
                            <OtherSettings />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
