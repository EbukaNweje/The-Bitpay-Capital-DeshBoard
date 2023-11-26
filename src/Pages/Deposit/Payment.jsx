import {FaCopy} from "react-icons/fa";
import "./Payment.css";
import {MdDownloading} from "react-icons/md";

const Payment = () => {
    return (
        <>
            <div className="DepPaymentBody">
                <h1>Make Payment</h1>
                <div className="DepPaymentContent">
                    <div className="DepPaymentContentWrap">
                        <div className="DepPaymentContentA">
                            <div>Your payment method</div>
                            <p>
                                BITCOIN PAYMENT{" "}
                                <span>
                                    <MdDownloading />
                                </span>
                            </p>
                        </div>
                        <p className="DepPaymentContentB">
                            You are to make payment of $200 using your selected
                            payment method.
                        </p>
                        <div className="DepPaymentContentC">
                            <p>BITCOIN PAYMENT Address:</p>
                            <div className="DepPaymentContentCTopReferUsDivBox">
                                <input
                                    type="text"
                                    value={"https://i.swiftearntr.com/ref/eze"}
                                    readOnly
                                />
                                <div className="DepPaymentContentCTopReferUsDivBoxCopy">
                                    <FaCopy />
                                </div>
                            </div>
                            <h5>Network Type: <span>BTC</span></h5>
                        </div>
                        <div className="DepPaymentContentD">
                            <p>Upload Payment proof after payment.</p>
                            <div className="DepPaymentContentDUpload">
                                <input type="file" />
                            </div>
                            <button>Submit Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
