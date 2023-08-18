import "../../styles/Header/midNavbar.css";
import logoIcon from "../../assets/icons/logo.png";
import searchIcon from "../../assets/icons/search.png";
import favoriteIcon from "../../assets/icons/favorite.png";
import cartIcon from "../../assets/icons/cart.png";

export default function MidNavbar() {
    return (
        <div className="mid_nav">
            <img src={logoIcon} alt="logo"/>
            <div className="mid_nav_search">
                <img src={searchIcon} id="searchIcon" alt="search"/>
                <input type="search" id="searchInput" placeholder="Search"/>
                <button id="search_btn">Search</button>
            </div>
            <div className="mid_nav_btns">
                <img src={favoriteIcon} alt="favorite"/>
                <div className="vertical_line"></div>
                <div className="cart_wrapper">
                    <img src={cartIcon} alt="cart"/>
                    <div className="counter_wrapper">
                        <p id="counter">0</p>
                    </div>          
                </div>
                <div className="info_wrapper">
                    <p id="text">Shopping cart:</p>
                    <p id="price">$57.00</p>
                </div>
            </div>
        </div>
    )
}