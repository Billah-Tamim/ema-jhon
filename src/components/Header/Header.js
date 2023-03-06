import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/cart">Cart</a>
                <a href="/product">Product</a>
            </div>
        </nav>
    );
};

export default Header;