import "../../styles/Header/topNavbar.css";
import mapIcon from "../../assets/icons/map_pin.png";

export default function Top_Nav() {
    return (   
        <div className="small_nav">
            <div className="small_nav_contact">
                <img id="icon" src={mapIcon} alt="location"/>
                <p id="text">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="small_nav_links">
                <a href="/login">Sign In / Sign Up</a>
            </div>
        </div>
    );
}