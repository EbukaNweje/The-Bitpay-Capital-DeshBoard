import {
    FaCopy,
    FaNotesMedical,
} from "react-icons/fa";
import "./DashHome.css";
import lineChart from '../../assets/linechart.webp'
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import axios from "axios";
import vid from '../../assets/crypt.mp4'


const DashHome = ({homechange, planchange, Transactions}) => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const userData = useSelector((state) => state.persisitedReducer.user)
    console.log(userData);

    useEffect(() => {
        // Fetch the current exchange rate from an API (replace with a reliable API)
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            const rate = response.data.bpi.USD.rate.replace(',', ''); // assuming USD rate
            setExchangeRate(parseFloat(rate));
          })
          .catch(error => {
            console.error('Error fetching exchange rate:', error);
          });
      }, []); // Empty dependency array ensures useEffect runs only once on component mount

      const bitcoinValue = userData.accountBalance / exchangeRate;
      const bitcoinValue2 = userData.totalProfit / exchangeRate;
      const bitcoinValue3 = userData.bonus / exchangeRate;
      const bitcoinValue4 = userData.ref / exchangeRate;
      const bitcoinValue5 = userData.totalDeposit / exchangeRate;
      const bitcoinValue6 = userData.totalWithdrawal / exchangeRate;
      const bitcoinValue7 = userData.totalInvestment / exchangeRate;
      const roundedNumber = parseFloat(bitcoinValue.toFixed(8));
      const roundedNumber2 = parseFloat(bitcoinValue2.toFixed(8));
      const roundedNumber3 = parseFloat(bitcoinValue3.toFixed(8));
      const roundedNumber4 = parseFloat(bitcoinValue4.toFixed(8));
      const roundedNumber5 = parseFloat(bitcoinValue5.toFixed(8));
      const roundedNumber6 = parseFloat(bitcoinValue6.toFixed(8));
      const roundedNumber7 = parseFloat(bitcoinValue7.toFixed(8));
      console.log("this is it",roundedNumber);

    return (
        <>
            <div className="DashHomeBody">
                <h2 className="DashHomeHeaderText">
                    Welcome, <span>{userData?.fullName}</span>
                    
                </h2>
                <div className="DashHomeInfoBox1">
                    <p>Welcome to Bitpay Capital, Forverver in Profits.</p>
                </div>
                <div className="DashHomeInfoBox2">
                    <p>Welcome to Bitpay Capital</p>
                </div>
                <div className="DashHomeMainContent">
                    <div className="DashHomeMainContentAccSummaryDiv">
                        <h3 className="DashHomeMainContentAccSummaryDivH3Text">Account Summary</h3>
                        <div className="DashHomeMainContentAccSummary">
                            <div className="DashHomeMainContentAccSummaryRow1">
                                <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Account Balance</h4>
                                        <h3>$ &nbsp;{userData?.accountBalance}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber}BTC</span>
                                        <p className="lineChart"></p>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div>
                                {/* <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Total Profit</h4>
                                        <h3>$ &nbsp;{userData?.totalProfit}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber2}BTC</span>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div> */}
                                <div className="DashHomeMainContentAccSummaryRow1Box">
                                    <div className="DashHomeMainContentAccSummaryRow1BoxL">
                                        <h4>Bonus</h4>
                                        <h3>$ &nbsp;{userData?.bonus}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber3}BTC</span>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Referral Bonus</h4>
                                        <h3>$ &nbsp;{userData?.ref}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber4}BTC</span>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Total Deposits</h4>
                                        <h3>$ &nbsp;{userData?.totalDeposit}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber5}BTC</span>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div>
                                <div className="DashHomeMainContentAccSummaryRow2Box">
                                    <div className="DashHomeMainContentAccSummaryRow2BoxL">
                                        <h4>Total Widthdrawal</h4>
                                        <h3>$ &nbsp;{userData?.totalWithdrawal}.00</h3>
                                        <span style={{fontWeight:"700"}}>{roundedNumber6}BTC</span>
                                    </div>
                                    <div className="DashHomeMainContentAccSummaryRow1BoxR">
                                        <img src={lineChart} alt="" />
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="DashHomeMainContentActiveDiv">
                        <h3>
                            Active Plans(s) <span>({userData?.accountBalance <= 0 ? "0" : "1" })</span>
                        </h3>
                        <div className="DashHomeMainContentActiveDivBox">
                        
                                {
                                userData?.accountBalance  <= 0 ? <>
                                   <p>You do not have an active investment plan at the
                                    moment.</p>
                                    <button onClick={()=> {homechange(false); planchange(true)}}>Buy Plan</button> 
                                </>: <>
                                {userData?.newDay <= 0 ? "Your trading session has expired" : "Your trading session has started"} 
                                    {userData?.newDay <= 0 ? <button onClick={()=> {homechange(false); planchange(true)}}>Buy Plan</button>:null}
                                </> 
                                
                            }
                        </div>
                    </div>
                    <div className="DashHomeMainContenRecentTransactionDiv">
                        <h3>
                            Recent Transaction <span>(0)</span>
                        </h3>
                        <div className="DashHomeMainContenRecentTransactionDivBox">
                            <p className="DashHomeMainContenRecentTransactionDivBoxEndText" onClick={()=> {homechange(false); Transactions(true)}}>
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
                                value={`https://www.thebitpaycapital.com/`}
                                readOnly
                            />
                            <div className="DashHomeMainContenReferUsDivBoxCopy">
                                <FaCopy />
                            </div>
                        </div>
                    </div>
                    <div className="DashHomeMainContenVidDiv">
                        <video src={vid} muted autoPlay loop></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashHome;
