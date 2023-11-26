import "./Profile.css";

const WithdrawalSettings = () => {
    return (
        <>
            <div className="ProfileContentWS">
                <div className="ProfileContentWSRow1">
                    <div className="ProfileContentWSRow1A">
                        <p>Bank Name</p>
                        <input type="text" placeholder="Enter bank name" />
                    </div>
                    <div className="ProfileContentWSRow1B">
                        <p>Account Name</p>
                        <input type="text" placeholder="Enter Account name" />
                    </div>
                </div>
                <div className="ProfileContentWSRow2">
                    <div className="ProfileContentWSRow1A">
                        <p>Account Number</p>
                        <input type="text" placeholder="Enter Account number" />
                    </div>
                    <div className="ProfileContentWSRow1B">
                        <p>Swift Code</p>
                        <input type="text" placeholder="Enter Swift Code" />
                    </div>
                </div>
                <div className="ProfileContentWSRow3">
                    <div className="ProfileContentWSRow1A">
                        <p>Bitcoin</p>
                        <input
                            type="text"
                            placeholder="Enter Bitcoin Address"
                        />
                        <h4>
                            Enter your Bitcoin Address that will be used to
                            withdraw your funds
                        </h4>
                    </div>
                    <div className="ProfileContentWSRow1B">
                        <p>Etherum</p>
                        <input
                            type="text"
                            placeholder="Enter Etherum Address"
                        />
                        <h4>
                            Enter your Ethereum Address that will be used to
                            withdraw your funds
                        </h4>
                    </div>
                </div>
                <div className="ProfileContentWSRow3">
                    <div className="ProfileContentWSRow1A">
                        <p>Litecoin</p>
                        <input
                            type="text"
                            placeholder="Enter Litecoin Address"
                        />
                        <h4>
                            Enter your Litecoin Address that will be used to
                            withdraw your funds
                        </h4>
                    </div>
                    <div className="ProfileContentWSRow1B">
                        <p>USDT.TRC20</p>
                        <input
                            type="text"
                            placeholder="Enter USDT.TRC20 Address"
                        />
                        <h4>
                            Enter your USDT.TRC20 Address that will be
                            used to withdraw your funds
                        </h4>
                    </div>
                </div>
                <div className="ProfileContentWSRow4Btn">
                    <button>Save</button>
                </div>
            </div>
        </>
    );
};

export default WithdrawalSettings;
