import "../../styles/Header/small_nav.css";
import map_icon from "../../assets/icons/map_pin.png";

export default function Small_Nav() {
    return (
        <div className="small_nav">
            <div className="small_nav_contact">
                <img id="icon" src={map_icon}/>
                <p id="text">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="small_nav_links">
                <a href="#">Sign In / Sign Up</a>
            </div>
        </div>
    );
}