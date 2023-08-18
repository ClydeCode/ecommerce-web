import SmallNavbar from "../components/Header/SmallNavbar.js";
import MidNavbar from "../components/Header/MidNavbar.js";

export default function Header() {
    return (
        <div className="header">
            <SmallNavbar />
            <MidNavbar />
        </div>
    )
}