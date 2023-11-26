import "./Withdrawal.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import wallet from "../../assets/Wallet.svg.png";
import {FaPlus} from "react-icons/fa";

const Withdrawal = () => {
    const isConfirmedPwd = true;
    const nav = useNavigate();

    const handleConfirmPassword = () => {
        nav("/user/confirm-password");
    };
    const handleWithdrawFunds = () => {
        nav("/dashboard/withdraw-funds");
    };

    useEffect(() => {
        if (isConfirmedPwd === false) {
            handleConfirmPassword();
        }
    }, []);

    return (
        <>
            <div className="WithdrawalBody">
                <h1>Place a withdrawal request</h1>
                <div className="WithdrawalReqBody">
                    <div className="WithdrawalReqBodyContent">
                        <div className="WithdrawalReqBodyContentTop">
                            <div className="WithdrawalReqContentTop">
                                <p>BITCOIN PAYMENT</p>
                            </div>
                            <span>
                                <img src={wallet} alt="" width={100} />
                            </span>
                        </div>
                        <div className="WithdrawalReqContentDown">
                            <p className="ContentDownText1">
                                Minimum withdrawable amount <span>$1</span>
                            </p>
                            <p className="ContentDownText2">
                                Maximum withdrawable amount{" "}
                                <span>$1,000,000,000</span>
                            </p>
                            <p className="ContentDownText3">
                                Charge Type: <span>percentage</span> 
                            </p>
                            <p className="ContentDownText4">
                                Charges Amount: <span>0%</span>
                            </p>
                            <p className="ContentDownText5">
                                Duration: <span>Paste the BTC wallet address provided
                                below as the destination address:</span>
                            </p>
                            <button onClick={handleWithdrawFunds}>
                                <span>
                                    <FaPlus />
                                </span>
                                Request Withdrawal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Withdrawal;
