import {NavLink} from "react-router-dom";
import "./Deposit.css";

const Deposit = () => {
    return (
        <>
            <div className="DepositBody">
                <h1>Fund your account balance</h1>
                <div className="DepositContent">
                    <div className="DepositContentLeft">
                        <div className="DepositContentLeftTop">
                            <h3>Enter Amount</h3>
                            <input type="number" placeholder="Enter Amount" />
                        </div>
                        <div className="DepositContentLeftDown">
                            <h3>Choose Payment Method from the list below</h3>
                            <div className="DepositContentLeftDownInput">
                                <span>BITCOIN PAYMENT</span>
                                <input type="radio" />
                            </div>
                            <NavLink to={"payment"}>
                                <button>Proceed to payment</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="DepositContentRight">
                        <div className="DepositContentRightA">
                            <h4>Total Deposit</h4>
                            <h4 className="DepositContentRightABreak">
                                $0.00 <span>Amount</span>
                            </h4>
                        </div>
                        <div className="DepositContentRightB">
                            <p>View deposit history</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deposit;
