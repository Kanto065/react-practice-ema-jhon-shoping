import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const taxt = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + taxt;
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping cost: ${shipping}</p>
            <p>Tax: ${taxt}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;