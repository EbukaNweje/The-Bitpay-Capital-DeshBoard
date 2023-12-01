import { NavLink } from "react-router-dom";
import "./MyPlans.css";

const MyPlans = ({myplans, homechange, data}) => {
    console.log(data);
    return (
        <>
            <div className="MyPlansBody">
                <h1>My Investment plans (All)</h1>
                <div className="MyPlansContent">
                 {
                    data?.accountBalance >=1 ?
                    <div className="MyPlansContentWrap">
                    <p>
                        Your Investment plan is on.{" "}
                    </p>
                    {/* <button onClick={()=> {homechange(false); myplans(true)}}>Buy a plan</button> */}
                </div>: <div className="MyPlansContentWrap">
                    <p>
                        You do not have an investment plan at the moment or
                        no value match your query.{" "}
                    </p>
                    <button onClick={()=> {homechange(false); myplans(true)}}>Buy a plan</button>
                </div>
                 }
                </div>
            </div>
        </>
    );
};

export default MyPlans;
