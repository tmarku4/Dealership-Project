import React from "react";
import NavBar from "./NavBar";

function ErrorPage(){

    return (
        <div className="error-page">
            <NavBar />
            <h1>PAGE DOES NOT EXIST</h1>
            <p>Please return home</p>
        </div>
    )
}

export default ErrorPage