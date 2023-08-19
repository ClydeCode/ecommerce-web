import SmallNavbar from "../components/Header/SmallNavbar.js";
import MidNavbar from "../components/Header/MidNavbar.js";
import BotNavbar from "../components/Header/BotNavbar.js";

export default function Header() {
    return (
        <header>
            <SmallNavbar />
            <MidNavbar />
            <BotNavbar />
        </header>
    )
}