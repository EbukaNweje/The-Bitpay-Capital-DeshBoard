import "./ProfitHistory.css";

const ProfitHistory = () => {
    return (
        <>
            <div className="ProfitHistoryBody">
                <h1>Your ROI history</h1>
                <div className="ProfitHistoryContent">
                    <div className="ProfitHistoryContentTop">
                        <p>Plan</p>
                        <p>Amount</p>
                        <p>Type</p>
                        <p>Date Created</p>
                    </div>
                    {/* <div className="ProfitHistoryContentDown">
                        <div className="ProfitHistoryContentItem">
                            <p>Flex</p> 
                            <p>$2,000</p>
                            <p>Easy Plan</p>
                            <p>24-10-2023</p>
                        </div>
                        <div className="ProfitHistoryContentItem">
                            <p>Flex</p> 
                            <p>$2,000</p>
                            <p>Easy Plan</p>
                            <p>24-10-2023</p>
                        </div>
                        <div className="ProfitHistoryContentItem">
                            <p>Flex</p> 
                            <p>$2,000</p>
                            <p>Easy Plan</p>
                            <p>24-10-2023</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default ProfitHistory;
