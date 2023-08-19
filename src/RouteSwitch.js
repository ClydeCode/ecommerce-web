import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}