import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./styles.css";
export const NavBar = () => {
    let navigate = useNavigate();
    const navigatePage = () => {
        navigate("/cart");
    };
    return (
        <div class='topnav'>
            <a className='split' onClick={navigatePage}>
                Cart
            </a>
        </div>
    );
};
