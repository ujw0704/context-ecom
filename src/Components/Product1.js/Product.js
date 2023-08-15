
import React, { useContext } from 'react';
import { CartContent } from './Main';
import Headers from "./Head.css"

function Product() {
    const { cart, setCart, cost, setCost } = useContext(CartContent);

    const products = [
        { name: "sweet", price: 15, disc: "item-1" },
        { name: "chips", price: 20, disc: "item-2" },
        { name: "cartbury", price: 30, disc: "item-3" },
        { name: "coldrink", price: 20, disc: "item-4" },
    ];

    function handleClick(e, product) {
        e.preventDefault();
        setCart([...cart, product]);
        setCost(cost + product.price);
    }

    function handleDelete(e, product) {
        e.preventDefault();
        const newCart = cart.filter((productInCart) => {
            return productInCart !== product;
        });
        setCart(newCart);
        setCost(cost - product.price);
    }

    return (
        <div>
            {products.map((product, index) => (
                <div className='product' key={index}>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.disc}</p>
                    <a href='' onClick={e => { handleClick(e, product, index) }}>add to cart</a>
                </div>
            ))}

            {cart.map((product, index) => (
                <div key={index}>
                    <h1>{product.price}</h1>
                    <button onClick={e => { handleDelete(e, product) }}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Product;
