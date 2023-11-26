import "./TransferFunds.css";
import {IoWalletOutline} from "react-icons/io5";

const Transfer = () => {
    return (
        <>
            <div className="TransferFundsBody">
                <h1>Funds Transfer</h1>
                <div className="TransferFundsContent">
                    <div className="TransferFundsContentWrap">
                        <div className="TransferFundsTop">
                            <span>
                                <IoWalletOutline className="IoWalletOutline"/>
                            </span>
                            <p>
                                $0.00 <span>Your Account Balance</span>
                            </p>
                        </div>
                        <div className="TransferFundsDown">
                            <div className="TransferFundsDownA">
                                <p>
                                    Recipient Email or username <span>*</span>
                                </p>
                                <input type="text" />
                            </div>
                            <div className="TransferFundsDownB">
                                <p>
                                    Amount <span>*</span>
                                </p>
                                <input
                                    type="number"
                                    placeholder="Enter the amount you want to transfer to recipient"
                                />
                            </div>
                            <div className="TransferFundsDownC">
                                <p>
                                    Transfer Charges: <span>0%</span>
                                </p>
                                <button>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transfer;
