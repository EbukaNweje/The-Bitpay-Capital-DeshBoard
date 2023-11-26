import { NavLink } from "react-router-dom";
import "./MyPlans.css";

const MyPlans = () => {
    return (
        <>
            <div className="MyPlansBody">
                <h1>My Investment plans (All)</h1>
                <div className="MyPlansContent">
                    <div className="MyPlansContentWrap">
                        <p>
                            You do not have an investment plan at the moment or
                            no value match your query.{" "}
                        </p>
                        <NavLink to={'/dashboard/trading-plans'}>

                        <button>Buy a plan</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPlans;
