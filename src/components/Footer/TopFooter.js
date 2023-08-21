import "../../styles/Footer/topFooter.css";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import pinterestIcon from "../../assets/icons/pinterest.png";
import instagramIcon from "../../assets/icons/instagram.png";

export default function TopFooter() {
    return (
        <div className="top_footer">
            <div className="text">
                <p id="title">Subscribe our Newsletter</p>
                <p id="description">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className="email_form">
                <input type="email" id="emailInput" placeholder="Your email address"/>
                <button id="email_btn">Subscribe</button>
            </div>
            <div className="social_links">
                <a href="https://www.facebook.com"><img src={ facebookIcon } alt="facebook" /></a>
                <a href="https://www.twitter.com"><img src={ twitterIcon } alt="twitter" /></a>
                <a href="https://www.pinterest.com"><img src={ pinterestIcon } alt="pinterest" /></a>
                <a href="https://www.instagram.com"><img src={ instagramIcon } alt="instagram" /></a>
            </div>
        </div>
    )
}