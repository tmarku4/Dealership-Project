import React from "react";

function CarCard({ carData }){
     //iterate through state data to populate list
    const carItems = carData.map((car) => {
        const {make, model, img, id} = car
        return(
            <div key={id} className="car-listing">
                <img src={img} alt={`${make} ${model}`} />
                <p>{`${make} ${model}`}</p>
            </div>
        )
    });

    return (
        <>{carItems}</>
    )
}

export default CarCard