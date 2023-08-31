import "../styles/Pages/registerPage.css";
import Footer from "../layout/Footer.js";
import Header from "../layout/Header.js";

export default function RegisterPage() {
    return (
        <div className="register_page">
            <Header />

            <div className="register_container">
                <p id="title">Create Account</p>
                <form action="post">
                    <input type="email" placeholder="Email"/> 
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>        
                    <label>
                        <input type="checkbox" />
                        Accept all terms & Conditions
                    </label>
                    <button type="submit" id="registerBtn">Create Account</button>
                </form>
                <p id="loginOffer">Already have account? <a href="/login">Login</a></p>
            </div>

            <Footer />
        </div>
    )
}