import axios from 'axios';
import { Routes, Route } from 'react-router'
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { FourHundredFourPage } from "./pages/404Page.jsx";
import { useEffect, useState } from "react";
import './App.css'

function App() {
    const [cart, setCart] = useState([]);

    async function fetchCart() {
        const response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
    }

    useEffect(() => {
        fetchCart();
    }, []);

      return (
            <>
                <Routes>
                    <Route index element={<HomePage cart={cart} fetchCart={fetchCart} />} />
                    <Route path="checkout" element={<CheckoutPage cart={cart} />} />
                    <Route path="orders" element={<OrdersPage cart={cart} />} />
                    <Route path="tracking" element={<TrackingPage />} />
                    <Route path="*" element={<FourHundredFourPage />} />
                </Routes>
            </>
      )
}

export default App
