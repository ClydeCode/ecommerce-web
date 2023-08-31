import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/login" element= { <LoginPage /> } />
                <Route path="/register" element= { <RegisterPage /> } />
            </Routes>
        </BrowserRouter>
    )
}