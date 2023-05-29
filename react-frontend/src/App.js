import './App.css';
import {useEffect, useState} from "react";
import LoginComponent from "./pages/LoginPage/components/LoginComponent/LoginComponent";
import {Routes,Route} from "react-router-dom";
import axios from 'axios';
import SignupComponent from "./pages/SignupPage/components/SignupComponent/SignupComponent";
import HomePage from "./pages/AccueilPage/HomePage";
import CongratsPage from "./pages/CongratsPage";

function App() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://api.example.com/data');
    //             setData(response.data);
    //         } catch (error) {
    //             console.log('Error:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    return (
      <>
                <Routes>
                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/signup" element={<SignupComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/congrats" element={<CongratsPage/>} />
                    <Route path="/home" element={<HomePage/>} />

                </Routes>
      </>
  );
}

export default App;
