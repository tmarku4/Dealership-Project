import React from "react";

function SignUpPage(){


    return (
        <form
        className="user-form"
        onSubmit={() => console.log('Submitted')}
        >
            <input
            type="text"
            name="first_name"
            placeholder="First Name..."
            />
            <input
            type="text"
            name="last_name"
            placeholder="Last Name..."
            />
            <input
            type="text"
            name="city"
            placeholder="City..."
            />
            <input
            type="text"
            name="state"
            placeholder="State..."
            />
            <input
            type="text"
            name="username"
            placeholder="Username..."
            />
        </form>
    )
}

export default SignUpPage