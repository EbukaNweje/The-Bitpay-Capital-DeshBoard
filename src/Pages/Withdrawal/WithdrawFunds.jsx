import "./WithdrawFunds.css";

import {IoMdMail} from "react-icons/io";
import {FaCheck} from "react-icons/fa";

const WithdrawFunds = () => {
    return (
        <>
            <div className="WithdrawFundsBody">
                <h1 className="WithdrawFundsBodyHeaderText">
                    Withdraw Details
                </h1>
                <div className="WithdrawFundsContent">
                    <div className="WithdrawFundsContentBox">
                        <div className="WithdrawFundsContentBox1">
                            <div className="WithdrawFundsContentBox1Method">
                                <div>Your payment method</div>
                                <p>
                                    BITCOIN PAYMENT{" "}
                                    <span>
                                        <FaCheck />
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="WithdrawFundsContentBox2">
                            <p>Enter amount to withdraw($)</p>
                            <input type="number" placeholder="Enter Amount" />
                        </div>
                        <div className="WithdrawFundsContentBox3">
                            <div className="WithdrawFundsContentBox3A">
                                <p>Enter OTP</p>
                                <button>
                                    <span>
                                        <IoMdMail />
                                    </span>
                                    Request OTP
                                </button>
                            </div>
                            <div className="WithdrawFundsContentBox3B">
                                <input type="text" placeholder="Enter OTP" />
                                <p>
                                    OTP will be sent to your email when you
                                    request{" "}
                                </p>
                            </div>
                        </div>
                        <div className="WithdrawFundsContentBox4">
                            <h3>Enter BITCOIN PAYMENT Address</h3>
                            <input
                                type="text"
                                placeholder="Enter BITCOIN PAYMENT Address"
                            />
                            <p>
                                BITCOIN PAYMENT is not a default withdrawal
                                option in your account, please enter the correct
                                wallet address to recieve your funds.
                            </p>
                        </div>
                        <div className="WithdrawFundsContentBox5">
                            <button>Complete Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawFunds;
