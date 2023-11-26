
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";


const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/:id" element={<Dashboard/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
