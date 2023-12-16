import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";

function LandingPage (){
    const [newestCars, setNewestCars] = useState([])

    const URL = "http://localhost:3000"

    // build a backend route for the top 5/10 cars with the most recent created_at columns
    useEffect(() => {
        fetch(URL + '/vehicles')
        .then(res => {
            if (res.ok) {
                res.json().then((returnedData) => {
                    setNewestCars(returnedData)
                })
            }
        })
        .catch((error) => {
            console.error('Error fetching newest vehicles', error)
        })
    }, [])

    const topTwoCars = newestCars.slice(0, 2)

    return (
        <>
          <CarCard carData={topTwoCars} />  
        </>
    )
}

export default LandingPage