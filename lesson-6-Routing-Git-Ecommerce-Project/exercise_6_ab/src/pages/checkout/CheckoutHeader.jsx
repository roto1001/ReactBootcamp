import { Link } from "react-router"
import './CheckoutHeader.css'

export function CheckoutHeader() {
    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/lesson-6-Routing-Git-Ecommerce-Project/exercise_6_ab/public">
                            <img className="logo" src="../public/images/logo.png" />
                            <img className="mobile-logo" src="../public/images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                                     to="/lesson-6-Routing-Git-Ecommerce-Project/exercise_6_ab/public">3 items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="../public/images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    );
}