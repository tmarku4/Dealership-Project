import React, { useState, useEffect } from "react";

import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import CarDetailsButton from "./CarDetailsButton";
import { useOutletContext } from "react-router-dom";

function CarCard({ carData, updateCart, updateFavorites}){
    const [carImages, setCarImages] = useState([])

        useEffect(() => {
            fetch ('/carimage')
            .then(res => {
                if (res.ok) {
                    res.json().then((returnedData) => {
                        // console.log(returnedData)
                        const imageInstances = returnedData.map((inst) => {
                            return inst
                        })
                        setCarImages(imageInstances)
                    })
                }
            })
    }, [carData])


    // console.log(carImages)
    // iterate through prop data to populate list
    const carItems = carData?.map((car) => {
        const {make, model, year, id} = car

        const images = carImages
        .filter((img) => (img.car_id === id))
        .map((filteredImg) => filteredImg.image)

        // console.log(images)

        return(
            <div key={id} id={id} className="car-card">
                <img src={images[0]} 
                alt={`${make} ${model}`} 
                />
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