import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

function UserFavorites(){
    const [currentFavorites, setCurrentFavorites] = useState([])

    function updateFavorites(){
        fetch('/favoritecars')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnedData => {
                        setCurrentFavorites(returnedData.map((car) => car.car_obj))
                        console.log(returnedData)
                    })
                }
            })
    }
    
    useEffect(() => {
        updateFavorites()
    }, [])


    return (
        <CarCard carData={currentFavorites} updateFavorites={updateFavorites} />
    )
}

export default UserFavorites