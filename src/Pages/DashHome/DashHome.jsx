import {
    FaArrowAltCircleDown,
    FaArrowAltCircleUp,
    FaCopy,
    FaGift,
    FaGifts,
    FaNotesMedical,
} from "react-icons/fa";
import "./DashHome.css";
import {FaSackDollar, FaDatabase} from "react-icons/fa6";

import {useSelector} from 'react-redux'


const DashHome = () => {

    const userData = useSelector((state) => state.swift.user)
    console.log(userData);


    return (
        <>
            <div className="DashHomeBody">
                <h2 className="DashHomeHeaderText">
                    Welcome, <span>{userData.fullName}</span>
                    
                </h2>
                <div className="DashHomeInfoBox1">
                    <p>Welcome to Swift Earn Trade, Please buy a plan</p>
                </div>
                <div className="DashHomeInfoBox2">
                    <p>Welcome to Swift Earn Trade</p>
                </div>
                <div className="DashHomeMainContent">
                    <div className="DashHomeMainContentAccSummaryDiv">
                        <h3 className="DashHomeMainContentAccSummaryDivH3Text">Account Summary</h3>
                        <div className="DashHomeMainContentAccSummary">
                            <div className="DashHomeMainContentAccSummaryRow1">
                                <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Account Balance</h4>
                                        <h3>$ &nbsp;{userData.accountBalance}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <span>
                                            <FaSackDollar />
                                        </span>
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Total Profit</h4>
                                        <h3>$ &nbsp;{userData.totalProfit}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <span>
                                            <FaDatabase />
                                        </span>
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Bonus</h4>
                                        <h3>$ &nbsp;{userData.bonus}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <span>
                                            <FaGift />
                                        </span>
                                    </div>
                                </div>
                            {/* <div className="DashHomeMainContentAccSummaryRow2"> */}
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Referral Bonus</h4>
                                        <h3>$ &nbsp;{userData.ref}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow2BoxR">
                                        <span>
                                            <FaGifts />
                                        </span>
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Total Deposits</h4>
                                        <h3>$ &nbsp;{userData.totalDeposit}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow2BoxR">
                                        <span>
                                            <FaArrowAltCircleDown />
                                        </span>
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Total Widthdrawal</h4>
                                        <h3>$ &nbsp;{userData.totalWithdrawal}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow2BoxR">
                                        <span>
                                            <FaArrowAltCircleUp />
                                        </span>
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Total Investment</h4>
                                        <h3>$ &nbsp;{userData.totalInvestment}.00</h3>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow2BoxR">
                                        <span>
                                            <FaArrowAltCircleUp />
                                        </span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="DashHomeMainContentActiveDiv">
                        <h3>
                            Active Plans(s) <span>(0)</span>
                        </h3>
                        <div className="DashHomeMainContentActiveDivBox">
                            <p>
                                You do not have an active investment plan at the
                                moment.
                            </p>
                            <button>Buy a plan</button>
                        </div>
                    </div>
                    <div className="DashHomeMainContenRecentTransactionDiv">
                        <h3>
                            Recent Transaction <span>(0)</span>
                        </h3>
                        <div className="DashHomeMainContenRecentTransactionDivBox">
                            <p className="DashHomeMainContenRecentTransactionDivBoxEndText">
                                <span>
                                    <FaNotesMedical />
                                </span> 
                                View all transactions
                            </p>
                            <div className="DashHomeMainContenRecentTransactionDivBoxTop">
                                <p className="DashHomeMainContenRecentTransactionDivBoxTopDate">Date</p>
                                <p className="DashHomeMainContenRecentTransactionDivBoxTopType">Type</p>
                                <p className="DashHomeMainContenRecentTransactionDivBoxTopAmount">Amount</p>
                            </div>
                            <div className="DashHomeMainContenRecentTransactionDivBoxDown">
                                <div className="DashHomeMainContenRecentTransactionDivBoxDownItem1">No record yet</div>
                                <div className="DashHomeMainContenRecentTransactionDivBoxDownItem1">
                                    <p className="DashHomeMainContenRecentTransactionDivBoxDownItem1Date">Date</p>
                                    <p className="DashHomeMainContenRecentTransactionDivBoxDownItem1Type">Type</p>
                                    <p className="DashHomeMainContenRecentTransactionDivBoxDownItem1Amount">Amount</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="DashHomeMainContenReferUsDiv">
                        <h3>Refer us & Earn</h3>
                        <p>Use the link below to invite your firends.</p>
                        <div className="DashHomeMainContenReferUsDivBox">
                            <input
                                type="text"
                                value={"https://i.swiftearntr.com/ref/eze"}
                                readOnly
                            />
                            <div className="DashHomeMainContenReferUsDivBoxCopy">
                                <FaCopy />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashHome;
