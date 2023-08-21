import "../../styles/Footer/botFooter.css";
import smallLogoIcon from "../../assets/icons/small_logo.png";
import applePayIcon from "../../assets/icons/applePay.png";
import visaIcon from "../../assets/icons/visa.png";
import discoverIcon from "../../assets/icons/discover.png";
import mastercardIcon from "../../assets/icons/mastercard.png";
import securePaymentIcon from "../../assets/icons/secure_payment.png";

export default function BotFooter() {
    return (
        <div className="bot_footer">
            <div className="higher_part">
                <div className="items">
                    <div className="info">
                        <img src={ smallLogoIcon } alt="logo"/>
                        <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div className="info-contacts">
                            <p id="phoneNumber">(219) 555-0114</p>
                            or
                            <p id="email">Proxy@gmail.com</p>
                        </div>
                    </div>
                    <div className="nav_links">
                        <a>My Account</a>
                        <a href="#">My Account</a>
                        <a href="#">Order History</a>
                        <a href="#">Shopping Cart</a>
                        <a href="#">Wishlist</a>
                    </div>
                    <div className="nav_links">
                        <a>Helps</a>
                        <a href="#">Contact</a>
                        <a href="#">Faqs</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="nav_links">
                        <a>Proxy</a>
                        <a href="#">About</a>
                        <a href="#">Shop</a>
                        <a href="#">Product</a>
                        <a href="#">Track Order</a>
                    </div>
                    <div className="nav_links">
                        <a>Categories</a>
                        <a href="#">Fruit & Vegetables</a>
                        <a href="#">Meat & Fish</a>
                        <a href="#">Bread & Bakery</a>
                        <a href="#">Beauty & Health</a>
                    </div>
                </div>
            </div>
            <div className="lower_part">
                <p>Ecobazar eCommerce © 2023. All Rights Reserved</p>
                <div className="icons">
                    <img src={ applePayIcon } alt="applePay"/>
                    <img src={ visaIcon } alt="visa"/>
                    <img src={ discoverIcon } alt="discover"/>
                    <img src={ mastercardIcon } alt="mastercard"/>
                    <img src={ securePaymentIcon } alt="securePayment"/>
                </div>
            </div>
        </div>
    )
}