import React from "react";
import { Link } from "react-router-dom";

function LoginPage(){
    console.log('test')

    return (
        <>
            <form 
            className="user-form"
            onSubmit={() => console.log('Submitted')}
            >
                <input
                type="text"
                name="username"
                placeholder="Username..."
                />
                <input
                type="text"
                name="password"
                placeholder="Password..."
                />
                <button
                type="submit"
                >
                Login
                </button>
            </form>
            <p>If you don't have a Login, please <Link to="/signup" className="instring-button">Signup</Link></p>
            
        </>
    )
}

export default LoginPage