import dayjs from "dayjs";
import {formatMoney} from "../../utils/money.js";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryItem) => {
                let price = 'FREE SHIPPING';
                if(deliveryItem.priceCents > 0) {
                    price = formatMoney(deliveryItem.priceCents);
                }

                return (
                    <div key={deliveryItem.id} className="delivery-option">
                        <input type="radio"
                               checked={deliveryItem.id === cartItem.deliveryOptionId}
                               className="delivery-option-input"
                               name={`delivery-option-${deliveryItem.id}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryItem.estimatedDeliveryTimeMs).format('dddd,MMMM,D')}
                            </div>
                            <div className="delivery-option-price">
                                {price}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}