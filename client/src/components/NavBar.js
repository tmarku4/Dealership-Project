import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ loggedIn }) {

    const navigate = useNavigate()

    function onLoginClick(){
        if (!loggedIn) {
            navigate('/login')
        }
    }

    if (!loggedIn){
        return (
            <>
                <div className='navigation-bar'>
                    <Link to="/" className="navigation-button">Home</Link>
                    <Link to="/inventory" className="navigation-button">All Inventory</Link>
                    <Link to="/sellcar" className="navigation-button">List a Car</Link>
                    <Link to="/about" className="navigation-button">About</Link>
                    <Link to="/login" className="navigation-button">Login</Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='navigation-bar'>
                    <Link to="/" className="navigation-button">Home</Link>
                    <Link to="/inventory" className="navigation-button">All Inventory</Link>
                    <Link to="/sellcar" className="navigation-button">List a Car</Link>
                    <Link to="/about" className="navigation-button">About</Link>
                    <Link to="/profile/{id}" className="navigation-button">Profile</Link>
                </div>
            </>
        )
    }
}

export default NavBar