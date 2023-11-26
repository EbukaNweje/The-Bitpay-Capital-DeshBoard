import {FaHandHoldingDollar} from "react-icons/fa6";
import {FaAngleDown} from "react-icons/fa";
import "./TradingPlans.css";
import {IoWalletOutline} from "react-icons/io5";
import {useState} from "react";

const TradingPlans = () => {
    const [showSelect, setShowSelect] = useState(false);

    const handleShowSelect = () => {
        setShowSelect(!showSelect);
    };

    return (
        <>
            <div className="TradingPlansBody">
                <h1>Get started with your investment</h1>
                <div className="TradingPlansContent">
                    <div className="TradingPlansLeft">
                        <div className="TradingPlansLeftBoxA">
                            <div
                                className="TradingPlansLeftBoxAMain"
                                onClick={handleShowSelect}
                            >
                                <h3>
                                    <span>
                                        <FaHandHoldingDollar />
                                    </span>
                                    ULTIMATE PACKAGE
                                </h3>
                                <p
                                    className={`Angle ${
                                        showSelect ? "active" : ""
                                    }`}
                                >
                                    <FaAngleDown />
                                </p>
                            </div>
                            <div
                                className={`TradingPlansLeftBoxADrop ${
                                    showSelect ? "active" : ""
                                }`}
                            >
                                <div className="TradingPlansLeftBoxADropItem" onClick={handleShowSelect}>
                                    <h3>
                                        <span>
                                            <FaHandHoldingDollar />
                                        </span>
                                        ULTIMATE PACKAGE
                                    </h3>
                                </div>
                                <div className="TradingPlansLeftBoxADropItem" onClick={handleShowSelect}>
                                    <h3>
                                        <span>
                                            <FaHandHoldingDollar />
                                        </span>
                                        ULTIMATE PACKAGE
                                    </h3>
                                </div>
                                <div className="TradingPlansLeftBoxADropItem" onClick={handleShowSelect}>
                                    <h3>
                                        <span>
                                            <FaHandHoldingDollar />
                                        </span>
                                        ULTIMATE PACKAGE
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="TradingPlansLeftBoxB">
                            <p>Choose Quick Amount to Invest</p>
                            <div className="TradingPlansLeftBoxBItem">
                                <div className="TradingPlansLeftBoxBAmount">
                                    $100
                                </div>
                                <div className="TradingPlansLeftBoxBAmount">
                                    $250
                                </div>
                                <div className="TradingPlansLeftBoxBAmount">
                                    $500
                                </div>
                                <div className="TradingPlansLeftBoxBAmount">
                                    $1,000
                                </div>
                                <div className="TradingPlansLeftBoxBAmount">
                                    $1,500
                                </div>
                                <div className="TradingPlansLeftBoxBAmount">
                                    $2,000
                                </div>
                            </div>
                        </div>
                        <div className="TradingPlansLeftBoxC">
                            <p>Or Enter Your Amount</p>
                            <input type="number" min={0} placeholder="0" />
                        </div>
                        <div className="TradingPlansLeftBoxD">
                            <p>Choose Payment Method</p>
                            <div className="TradingPlansLeftBoxDDiv">
                                <div className="TradingPlansLeftBoxDItem">
                                    <IoWalletOutline className="IoWalletOutline" />
                                    <p>
                                        Account Balance <span>$0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TradingPlansRight">
                        <h3>Your Investment Details</h3>
                        <div className="TradingPlansRightBox">
                            <div className="TradingPlansRightBoxRow1">
                                <div className="TradingPlansRightBoxRow1L">
                                    <h5>Name of plan</h5>
                                    <p>ULTIMATE PACKAGE</p>
                                </div>
                                <div className="TradingPlansRightBoxRow1R">
                                    <h5>Plan Price</h5>
                                    <p>$1000000</p>
                                </div>
                            </div>
                            <div className="TradingPlansRightBoxRow1">
                                <div className="TradingPlansRightBoxRow1L">
                                    <h5>Duration</h5>
                                    <p>1 Days</p>
                                </div>
                                <div className="TradingPlansRightBoxRow1R">
                                    <h5>Profit</h5>
                                    <p>46.5% Daily</p>
                                </div>
                            </div>
                            <div className="TradingPlansRightBoxRow1">
                                <div className="TradingPlansRightBoxRow1L">
                                    <h5>Minimum Deposit</h5>
                                    <p>$10000</p>
                                </div>
                                <div className="TradingPlansRightBoxRow1R">
                                    <h5>Maximum Deposit</h5>
                                    <p>$100000</p>
                                </div>
                            </div>
                            <div className="TradingPlansRightBoxRow1">
                                <div className="TradingPlansRightBoxRow1L">
                                    <h5>Minimum Return</h5>
                                    <p>46.5%</p>
                                </div>
                                <div className="TradingPlansRightBoxRow1R">
                                    <h5>Maximum Return</h5>
                                    <p>46.5%</p>
                                </div>
                            </div>
                            <div className="TradingPlansRightBoxRow2">
                                <div className="TradingPlansRightBoxRow1L">
                                    <h5>Bonus</h5>
                                    <p>$0</p>
                                </div>
                            </div>
                        </div>
                        <div className="TradingPlansRightBoxPay">
                            <div className="TradingPlansRightBoxPayTop">
                                <p>
                                    Payment method: <span>Account Balance</span>
                                </p>
                            </div>
                            <div className="TradingPlansRightBoxPayDown">
                                <p>
                                    Amount to invest: <span>$2,000</span>
                                </p>
                                <button>Confirm & Invest</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TradingPlans;
