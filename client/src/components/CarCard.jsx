import React from "react";

import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import CarDetailsButton from "./CarDetailsButton";

function CarCard({ carData, handleRemoveClick, updateCart, setFavFetchTrigger}){

    // iterate through prop data to populate list
    const carItems = carData?.map((car) => {
        const {make, model, year, img, id} = car
        return(
            <div key={id} id={id} className="car-card">
                <img src={img} alt={`${make} ${model}`} />
                <p>{`${year} ${make} ${model}`}</p>
                <FavoriteButton 
                carData={carData} 
                carID={id}
                setFavFetchTrigger={setFavFetchTrigger}
                />
                <AddToCartButton 
                carID={id} 
                handleRemoveClick={handleRemoveClick}
                updateCart={updateCart}
                />
                {/* <FavoriteButton 
                carData={carData} 
                carID={id}
                />
                <AddToCartButton 
                carID={id} 
                handleRemoveClick={handleRemoveClick}
                /> */}
                <CarDetailsButton />
            </div>
        )
    });

    return (
        <>{carItems}</>
    )
}

export default CarCard