import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Home(){
    const [carData, setCarData] = useState([])
    const [userData, setUserData] = useState([])
    const [loggedIn, setLoggedIn] = useState(true)
  
    // fetch car data //
    useEffect(() => {
      fetch('http://localhost:3000/cars')
      .then((resp) => resp.json())
      .then((data) => setCarData(data))
    }, [])

    return (
        <>
            <NavBar loggedIn={loggedIn} carData={carData}/>
            <Outlet context={{carData:carData}} />
        </>
    )
}

export default Home