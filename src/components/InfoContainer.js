import "../styles/infoContainer.css";
import deliveryTruckIcon from "../assets/icons/delivery-truck.png";
import headphonesIcon from "../assets/icons/headphones.png";
import shoppingBagIcon from "../assets/icons/shopping-bag.png";
import packageIcon from "../assets/icons/package.png";

export default function InfoContainer() {
    return (
        <div className="info_container_wrapper">
            <div className="info_container">
                <div className="item">
                    <img src={ deliveryTruckIcon }/>
                    <div className="item_content">
                        <p id="title">Free Shipping</p>
                        <p id="description">Free shipping on all your orders</p>
                    </div>
                </div>
                <div className="item">
                    <img src={ headphonesIcon }/>
                    <div className="item_content">
                        <p id="title">Customer Support 24/7</p>
                        <p id="description">Instant access to Support</p>
                    </div>
                </div>
                <div className="item">
                    <img src={ shoppingBagIcon }/>
                    <div className="item_content">
                        <p id="title">100% Secure Payment</p>
                        <p id="description">We ensure your money is safe</p>
                    </div>
                </div>
                <div className="item">
                    <img src={ packageIcon }/>
                    <div className="item_content">
                        <p id="title">Money-Back Guarantee</p>
                        <p id="description">30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}