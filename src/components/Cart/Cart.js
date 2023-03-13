import React from 'react';
import './Cart.css';

const Cart = ({cart, deletCart}) => {
    
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(const data of cart){
        quantity = quantity + data.quantity;
        price =price + (data.price * data.quantity);
        shipping = shipping + (data.shipping * data.quantity);

    }
    const tax = (price+shipping)*10/100;
    const grandTotal = price+shipping+tax;
    return (
        <div className='cart'>
            <h2>Cart Details</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <div className="cart-button">
                <button className='btn' onClick={deletCart}>Crear Cart</button>
                <br/>
                <button className='btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;