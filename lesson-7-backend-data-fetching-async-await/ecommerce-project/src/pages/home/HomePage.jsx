import axios from 'axios';
import { Header } from '../../components/Header.jsx';
import { useEffect, useState } from "react";
import {ProductGrid} from "./ProductsGrid.jsx";
import './HomePage.css';

export function HomePage({ cart }) {
    /*
    fetch('http://localhost:3000/api/products')
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        });
    */
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml+png" href="/home-favicon.png" />
            <title>Ecommerce-Project</title>
            <Header cart={cart}/>
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}