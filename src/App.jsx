
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
// import DashHome from "./Pages/DashHome/DashHome";
// import Deposit from "./Pages/Deposit/Deposit";
// import Withdrawal from "./Pages/Withdrawal/Withdrawal";
// import ProfitHistory from "./Pages/ProfitHistory/ProfitHistory";
// import Transactions from "./Pages/Transactions/Transactions";
// import Transfer from "./Pages/TransferFunds/TransferFunds";
// import Profile from "./Pages/Profile/Profile";
// import TradingPlans from "./Pages/TradingPlans/TradingPlans";
// import MyPlans from "./Pages/MyPlans/MyPlans";
// import Referrals from "./Pages/Referrals/Referrals";
// import WithdrawFunds from "./Pages/Withdrawal/WithdrawFunds";
// import Payment from "./Pages/Deposit/Payment";
// import HomeRoute from "./routes/HomeRoute";
// // import HomeRoute from "./routes/HomeRoute";
// import { HashRouter, Route, Routes } from "react-router-dom";





// function App() {  
  
//   return (
//     <>
//          <HashRouter>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//         </HashRouter>
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
