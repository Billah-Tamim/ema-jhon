import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    let price = 0;
    let shipping = 0;
    for(const data of cart){
        price =price + data.price;
        shipping = shipping +data.shipping;

    }
    const tax = (price+shipping)*10/100;
    const grandTotal = price+shipping+tax;
    return (
        <div className='cart'>
            <h2>Cart Details</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <div className="cart-button">
                <button>Crear Cart</button>
                <br/>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;