import React, { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

function SignUpPage(){
    const [users, setUsers] = useState([])
    const  { buildNewModel, formPostRoute } = useOutletContext()
    const navigate = useNavigate()

    function handleFormSubmit(event){
        formPostRoute(event, "profiles", (returnedData) => {
            setUsers(returnedData)
            navigate(`/profile/2`)
        })
    }

    function onFormValueInput(event){
        buildNewModel(event)
    }

    return (
        <>
            <form
            className="user-form"
            onSubmit={handleFormSubmit}
            >
                <input
                type="text"
                name="first_name"
                placeholder="First Name..."
                onChange={onFormValueInput}
                />
                <input
                type="text"
                name="last_name"
                placeholder="Last Name..."
                onChange={onFormValueInput}
                />
                <input
                type="text"
                name="city"
                placeholder="City..."
                onChange={onFormValueInput}
                />
                <input
                type="text"
                name="state"
                placeholder="State..."
                onChange={onFormValueInput}
                />
                <input
                type="text"
                name="username"
                placeholder="Username..."
                onChange={onFormValueInput}
                />
                <input
                type="text"
                name="password"
                placeholder="Password..."
                onChange={onFormValueInput}
                />
                <button 
                type="submit"
                >Sign Up</button>
            </form>
            <p>Already have a login? Login <Link to="/login" className="instring-button">here</Link></p>
        </>
        
    )
}

export default SignUpPage