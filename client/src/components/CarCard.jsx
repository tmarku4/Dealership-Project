import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import CarDetailsButton from "./CarDetailsButton";

function CarCard({ carData }){
    const navigate = useNavigate()

    // iterate through prop data to populate list
    const carItems = carData?.map((car) => {
        const {make, model, year, img, id} = car
        return(
            <div key={id} id={id} className="car-card">
                <img src={img} alt={`${make} ${model}`} />
                <p>{`${year} ${make} ${model}`}</p>
                <FavoriteButton carData={carData} carID={car.id} />
                <AddToCartButton carData={carData} carID={car.id} />
                <CarDetailsButton />
            </div>
        )
    });

    return (
        <>{carItems}</>
    )
}

export default CarCard