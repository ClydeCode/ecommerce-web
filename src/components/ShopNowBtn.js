import "../styles/shopNowBtn.css";
import arrowIcon from "../assets/icons/arrow.png";

export default function ShopNowBtn(props) {
    return (
        <a 
            href="/shop" 
            id="shopNowBtn"
            className={props.whiteBg ? "shopNowBtnWhiteBg" : ""}>
                Shop Now
                <img src={ arrowIcon } alt="arrow" />
        </a> 
    )
}