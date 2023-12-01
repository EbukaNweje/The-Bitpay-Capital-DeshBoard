
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Payment from "./Pages/Deposit/Payment";
import ScrollToTop from "./Components/ScrollToTop";


const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/:id" element={<Dashboard/>} />
            <Route path=":id/payment/:paymentname" element={<Payment/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
