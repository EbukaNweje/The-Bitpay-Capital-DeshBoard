import "./WithdrawFunds.css";

import {IoMdMail} from "react-icons/io";
import {FaCheck} from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatewithdraw } from "../../Components/store/FeaturesSlice";

const WithdrawFunds = () => {
    const {id} = useParams()
    const [withdrawalWallet, setWithdrawalWallet] = useState()
    const [withdrawalWalleteroo, setWithdrawalWalletEroo] = useState()
    const [withdrawCodesEroo, setWithdrawCodesEroo] = useState()
    const [amount, setAmount] = useState("0.00")
    const [amountError, setAmountError] = useState("")
    const [withdrawCodes, setWithdrawCodes] = useState("")
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const dispatch = useDispatch()


    const userData = useSelector((state) => state.persisitedReducer.user)
    console.log(userData);

    const url = `https://bitpaycapital.onrender.com/api/requestwithdrawcode/${id}`
    const urlll = `https://bitpaycapital.onrender.com/api/withdrawal`

    let userName = userData?.userName
    let email = userData?.email

    const datas = {withdrawalWallet, userName, email, amount}

    const datasend = {
        withdrawalWallet, userName, email, amount, dateCreated: new Date().toDateString(),
    }

    const SandData = () => {
        dispatch(updatewithdraw(datasend))
    }

    const sendWallet = () => {
        if(userData.withdrawCode !== withdrawCodes) {
            setWithdrawCodesEroo("Invalid Code")
        }else if(!withdrawalWallet){
            setWithdrawalWalletEroo("You can not leave this Field Empty")
        }else if (!amount){
            setAmountError("You can not leave this Field Empty")
        }
        else{
            axios.post(urlll, datas)
            .then(res => {console.log(res), SandData(), window.location.reload()})
            .catch((err)=>{
                console.log(err)
            })
        }
    }


const sendWithdrawcode = ()=>{
         setButtonDisabled(true)
            axios.post(url)
                .then(res=>{
                console.log(res)
            })
             .catch((err)=>{
                setButtonDisabled(false)
                console.log(err)
            })
}


    const handleAmountVal = (e) => {
        const newAmounts = e.target.value;
        setAmount(newAmounts);
        // Validate the email
        if(newAmounts.trim() === '') {
            setAmountError('Amount is required');
        }else {
            setAmountError('');
        }
      };
    const handleWithdrawCodes = (e) => {
        const newAmounts = e.target.value;
        setWithdrawCodes(newAmounts);
        // Validate the email
        if(newAmounts.trim() === '') {
            setWithdrawCodesEroo('WithdrawCodes is required');
        }else {
            setWithdrawCodesEroo('');
        }
      };

      const handlewallt = (e) => {
        const newAmounts = e.target.value;
        setWithdrawalWallet(newAmounts);
        // Validate the email
        if(newAmounts.trim() === '') {
            setWithdrawalWalletEroo('Wallet is required');
        }else {
            setWithdrawalWalletEroo('');
        }
      };


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
                            <input type="number" placeholder="Enter Amount" onChange={handleAmountVal}/>
                            <p style={{marginTop: "3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{amountError}</p>
                        </div>
                        <div className="WithdrawFundsContentBox3">
                            <div className="WithdrawFundsContentBox3A">
                                <p>Enter OTP</p>
                                <button onClick={sendWithdrawcode}
                                 disabled={isButtonDisabled}
                                 style={{background: `${isButtonDisabled ? "#E0E0E5" : "#0E4152"}`}}
                                >
                                    <span>
                                        <IoMdMail />
                                    </span>
                                    Request OTP
                                </button>
                            </div>
                            <div className="WithdrawFundsContentBox3B">
                                <input type="text" placeholder="Enter OTP" onChange={handleWithdrawCodes} />
                                <p style={{marginTop: "3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{withdrawCodesEroo}</p>
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
                                onChange={handlewallt}
                            />
                            <p style={{marginTop: "3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{withdrawalWalleteroo}</p>
                            <p>
                                BITCOIN PAYMENT is not a default withdrawal
                                option in your account, please enter the correct
                                wallet address to recieve your funds.
                            </p>
                        </div>
                        <div className="WithdrawFundsContentBox5">
                            <button onClick={sendWallet}> Complete Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawFunds;
