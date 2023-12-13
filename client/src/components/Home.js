import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Home({ loggedIn }){


    return (
        <>
            <NavBar loggedIn={loggedIn}/>
            <Outlet />
        </>
    )
}

export default Home