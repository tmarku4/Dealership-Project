import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";

function CarDetails(){

    // build out more car details and info for car-specific page

    const [vehicle, setVehicle] = useState([]);
    const { vehicleID } = useParams();

    // Fetch vehicle data //
    useEffect(() => {
        fetch(`/cars/${vehicleID}`)
        .then((res) => {
            if (res.ok) {
                res.json().then((returnedData) => {
                    setVehicle([returnedData]);
                })
            }
        })
        .catch((error) => {
            console.error('Error fetching vehicle:', error);
        });
    }, []);

    return (
        <div>
            <CarCard carData={vehicle} />
        </div>
    )
}

export default CarDetails