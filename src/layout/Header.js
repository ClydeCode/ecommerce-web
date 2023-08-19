import TopNavbar from "../components/Header/TopNavbar.js";
import MidNavbar from "../components/Header/MidNavbar.js";
import BotNavbar from "../components/Header/BotNavbar.js";

export default function Header() {
    return (
        <header>
            <TopNavbar />
            <MidNavbar />
            <BotNavbar />
        </header>
    )
}