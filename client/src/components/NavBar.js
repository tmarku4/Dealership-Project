import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ loggedIn }) {

    // if (!loggedIn){
        return (
            <>
                <div className='navigation-bar'>
                    <Link to="/" className="navigation-button">Home</Link>
                    <Link to="/inventory" className="navigation-button">All Inventory</Link>
                    <Link to="/sellcar" className="navigation-button">List a Car</Link>
                    <Link to="/about" className="navigation-button">About</Link>
                    <Link to="/login" className="navigation-button">Login</Link>
                    <Link to="/signup" className="navigation-button">Signup</Link>
                </div>
            </>
        )
    // } else {
    //     return (
    //         <>
    //             <div className='navigation-bar'>
    //                 <Link to="/" className="navigation-button">Home</Link>
    //                 <Link to="/inventory" className="navigation-button">All Inventory</Link>
    //                 <Link to="/sellcar" className="navigation-button">List a Car</Link>
    //                 <Link to="/about" className="navigation-button">About</Link>
    //                 <Link to="/profile/:userID" className="navigation-button">Profile</Link>
    //                 <button>Sign Out</button>
    //             </div>
    //         </>
    //     )
    // }
}

export default NavBar