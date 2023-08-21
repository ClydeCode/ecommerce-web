import InfoContainer from "../components/InfoContainer.js";
import MainAds from "../components/MainAds.js";
import Footer from "../layout/Footer.js";
import Header from "../layout/Header.js";

export default function Home() {
    return (
        <div>
            <Header />
            <MainAds />
            <InfoContainer />
            <Footer />
        </div>
    );
}