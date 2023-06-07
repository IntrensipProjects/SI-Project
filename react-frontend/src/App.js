import './App.css';
import LoginComponent from "./pages/LoginPage/components/LoginComponent/LoginComponent";
import {Routes,Route} from "react-router-dom";
import SignupComponent from "./pages/SignupPage/components/SignupComponent/SignupComponent";
import HomePage from "./pages/AccueilPage/HomePage";
import CongratsPage from "./pages/CongratsPage";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import InternsPage from "./pages/InternsPage/InternsPage";

function App() {
    return (
      <>
                <Routes>
                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/signup" element={<SignupComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/congrats" element={<CongratsPage/>} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/employees" element={<EmployeesPage/>} />
                    <Route path="/interns" element={<InternsPage/>} />
                </Routes>
      </>
  );
}

export default App;
