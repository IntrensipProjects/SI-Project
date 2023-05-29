import './App.css';
import LoginComponent from "./pages/LoginPage/components/LoginComponent/LoginComponent";
import {Routes,Route} from "react-router-dom";
import SignupComponent from "./pages/SignupPage/components/SignupComponent/SignupComponent";
import CongratsComponent from "./components/CongratsComponent/CongratsComponent";
import HomePage from "./pages/AccueilPage/HomePage";
function App() {
  return (
      <>
                <Routes>
                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/signup" element={<SignupComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/congrats" element={<CongratsComponent/>} />
                    <Route path="/home" element={<HomePage/>} />

                </Routes>
      </>
  );
}

export default App;
