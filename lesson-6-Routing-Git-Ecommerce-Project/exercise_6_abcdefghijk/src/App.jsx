import { Routes, Route } from 'react-router'
import { HomePage } from "./pages/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { FourHundredFourPage } from "./pages/404Page.jsx";
import './App.css'

function App() {
  return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="tracking" element={<TrackingPage />} />
                <Route path="*" element={<FourHundredFourPage />} />
            </Routes>
        </>
  )
}

export default App
