
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";


const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
