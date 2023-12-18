import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

function UserFavorites(){
    const [currentFavorites, setCurrentFavorites] = useState([])

    const URL = "http://localhost:3000"

    useEffect(() => {
        fetch(URL + '/favorites')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnedData => {
                        setCurrentFavorites(returnedData)
                    })
                }
            })
    }, [])

    return (
        <CarCard carData={currentFavorites} />
    )
}

export default UserFavorites