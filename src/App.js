import logo from "./logo.svg";
import "./App.css";
import AdminLogin from "./Components/AdminLogin";
import LandingPage from "./Display/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Display/Home";
import DashboardAdmin from "./Components/DashboardAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DashBoardAdmin" element={<DashboardAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
