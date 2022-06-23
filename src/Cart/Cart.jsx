import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
    const cartItems = useSelector((items) => items);
    console.log(cartItems);
    return (
        <div>
            <h1>Cart Items</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {cartItems.items.map((item) => (
                <div>
                    <h3>{item.name}</h3>
                    <hr></hr>
                </div>
            ))}
        </div>
    );
};
