import "./Profile.css";

const OtherSettings = () => {
    return (
        <>
            <div className="ProfileContentOS">
                <div className="ProfileContentOSRow1">
                    <div className="ProfileContentOSRow1A">
                        <p>
                            Send confirmation OTP to my email when withdrawing
                            my funds.
                        </p>
                        <div className="ProfileContentOSRow1AInputHolder">
                            <p>
                                <input type="radio" /> Yes
                            </p>
                            <p>
                                <input type="radio" /> No
                            </p>
                        </div>
                    </div>
                    <div className="ProfileContentOSRow1B">
                        <p>Send me email when i get profit.</p>
                        <div className="ProfileContentOSRow1BInputHolder">
                            <p>
                                <input type="radio" /> Yes
                            </p>
                            <p>
                                <input type="radio" /> No
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ProfileContentOSRow2">
                    <div className="ProfileContentOSRow1A">
                        <p>Send me email when my investment plan expires.</p>
                        <div className="ProfileContentOSRow1BInputHolder">
                            <p>
                                <input type="radio" /> Yes
                            </p>
                            <p>
                                <input type="radio" /> No
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ProfileContentOSRow4Btn">
                    <button>Save</button>
                </div>
            </div>
        </>
    );
};

export default OtherSettings;
