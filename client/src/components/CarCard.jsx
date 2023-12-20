import React from "react";

import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import CarDetailsButton from "./CarDetailsButton";

function CarCard({ carData, updateCart, updateFavorites}){

    // iterate through prop data to populate list
    const carItems = carData?.map((car) => {
        const {make, model, year, img, id} = car
        return(
            <div key={id} id={id} className="car-card">
                <img src={img} alt={`${make} ${model}`} />
                <p>{`${year} ${make} ${model}`}</p>
                <FavoriteButton 
                carID={id}
                updateFavorites={updateFavorites}
                />
                <AddToCartButton 
                carID={id} 
                updateCart={updateCart}
                />
                <CarDetailsButton />
            </div>
        )
    });

    return (
        <>{carItems}</>
    )
}

export default CarCard