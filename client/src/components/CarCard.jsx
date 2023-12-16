import React, { useState, useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";

function CarCard({ carData }){
     //iterate through state data to populate list
    

    const carItems = carData?.map((car) => {
        const {make, model, year, img, id} = car
        return(
            <div key={id} id={id} className="car-card">
                <img src={img} alt={`${make} ${model}`} />
                <p>{`${year} ${make} ${model}`}</p>
                <FavoriteButton carData={carData} carID={car.id} />
                <AddToCartButton carData={carData} carID={car.id}/>
            </div>
        )
    });

    return (
        <>{carItems}</>
    )
}

export default CarCard