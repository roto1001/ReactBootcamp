import {Product} from "./Product.jsx";

export function ProductGrid({ products,fetchCart }) {

    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} fetchCart={fetchCart} />
                );
            })}
        </div>
    );
}