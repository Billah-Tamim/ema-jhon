import React from 'react';
import './Product.css';

const Product = ({product, handelAddToCart}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> handelAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;