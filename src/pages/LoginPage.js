import "../styles/Pages/loginPage.css";
import Footer from "../layout/Footer.js";
import Header from "../layout/Header.js";

export default function LoginPage() {
    return (
        <div className="login_page">
            <Header />

            <div className="login_container">
                <p id="title">Sign In</p>
                <form action="post">
                    <input type="email" placeholder="Email"/> 
                    <input type="password" placeholder="Password"/>
                    <div className="optional_subcontainer">          
                        <label>
                            <input type="checkbox" id="rememberMe"/>
                            Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button type="submit" id="loginBtn">Login</button>
                </form>
                <p id="registerOffer">Don't have account? <a href="/register">Register</a></p>
            </div>

            <Footer />
        </div>
    )
}