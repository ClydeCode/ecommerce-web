import "../../styles/Header/botNavbar.css";
import { NavLink } from "react-router-dom";
import phoneIcon from "../../assets/icons/phone.png";

export default function BotNavbar() {
    return (
        <div className="bot_nav">
            <nav className="nav_items">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </nav>
            <div className="nav_contact">
                <img src={ phoneIcon } alt="contact_phone"/>
                <p>(219) 555-0114</p>
            </div>
        </div>
    )
}