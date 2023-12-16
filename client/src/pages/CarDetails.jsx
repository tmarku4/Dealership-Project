import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";

function CarDetails(){

    const [vehicle, setVehicle] = useState([]);
    const { vehicleID } = useParams();

    const URL = "http://localhost:3000"

    // Fetch vehicle data //
    useEffect(() => {
        fetch(URL + `/vehicles/${vehicleID}`)
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