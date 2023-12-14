import React from "react";

function LoginPage(){
    console.log('test')

    return (
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
        </form>
    )
}

export default LoginPage