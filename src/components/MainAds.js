import "../styles/mainAds.css";
import mainBanner from "../assets/banners/banner_1.png";
import rightBanner1 from "../assets/banners/banner_2.png";
import rightBanner2 from "../assets/banners/banner_3.png";
import ShopNowBtn from "./ShopNowBtn";

export default function MainAds() {
    return (
        <div className="main_ads">
            <div className="main_banner">
                <img src={ mainBanner } alt="main_banner"/>
                <div className="main_banner_content">
                    <h1 id="title">Fresh & Healthy Organic Food</h1>
                    <div className="info">
                        <p id="title">Sale up to <p id="titleOutlined">30% OFF</p></p>
                        <p id="description">Free shipping on all your order.</p>
                    </div>
                    <div id="btn">
                        <ShopNowBtn whiteBg={true}/> 
                    </div>  
                </div>
            </div>
            <div className="right_banners">
                <div className="top_banner">
                    <img src={ rightBanner1 } alt="right_banner"/>
                    <div className="top_banner_content">
                        <p id="title">SUMMER SALE</p>
                        <p id="discount">75% OFF</p>
                        <p id="description">Only Fruit & Vegetables</p>
                        <div id="btn">
                            <ShopNowBtn /> 
                        </div>   
                    </div>
                </div>
                <div className="bot_banner">
                    <img src={ rightBanner2 } alt="right_banner"/>
                    <div className="bot_banner_content">
                        <p id="title">BEST DEAL</p>
                        <p id="description">Special Products Deal of the Month</p>
                        <div id="btn">
                            <ShopNowBtn /> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}