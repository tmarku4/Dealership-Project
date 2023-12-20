import React, { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

function SignUpPage(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
  
    const { currentUser, attemptSignup} = useOutletContext()

    const handleChangeFirstName = e => setFirstName(e.target.value)
    const handleChangeLastName = e => setLastName(e.target.value)
    const handleChangeCity = e => setCity(e.target.value)
    const handleChangeState = e => setState(e.target.value)
    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    function handleFormSubmit(event){
        event.preventDefault();
        attemptSignup({firstName, lastName, city, state, username, password})
        navigate(`/profile/${currentUser.id}`)

        // const newUser = new FormData(event.target)
        // const JSONData = {}

        // // it does not JSONIFY properly as FormData....
        // // make it a standard object
        // newUser.forEach((value, key) => {
        //     JSONData[key] = value
        // })

        // console.log(JSONData)
        // fetch(`/users`, {
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        //     'Accept': "application/json"
        // },
        // body: JSON.stringify(JSONData)
        // })
        // .then((res) => {
        //     if (res.ok) {
        //     return res.json().then((returnedData) => {
        //         navigate(`/profile/${returnedData.id}`)
        //     });
        //     } else {
        //     // Handle error
        //     console.error("Error:", res.status, res.statusText);
        //     }
        // })
        // .catch((error) => {
        //     console.log(`${error}`);
        // });
    }

    return (
        <>
            <form
            id="user-form"
            onSubmit={handleFormSubmit}
            >
                <input
                type="text"
                name="first_name"
                // value={firstName}
                placeholder="First Name..."
                // onChange={handleChangeFirstName}
                />
                <input
                type="text"
                name="last_name"
                // value={lastName}
                placeholder="Last Name..."
                // onChange={handleChangeLastName}
                />
                <input
                type="text"
                name="city"
                // value={city}
                placeholder="City..."
                // onChange={handleChangeCity}
                />
                <input
                type="text"
                name="state"
                // value={state}
                placeholder="State..."
                // onChange={handleChangeState}
                />
                <input
                type="text"
                name="username"
                // value={username}
                placeholder="Username..."
                // onChange={handleChangeUsername}
                />
                <input
                type="text"
                name="password"
                // value={password}
                placeholder="Password..."
                // onChange={handleChangePassword}
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