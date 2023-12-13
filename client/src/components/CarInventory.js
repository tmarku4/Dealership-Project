import React from 'react';

function CarInventory({ carData }){

  const carItems = carData.map((car) => {
    const {make, model, img, id} = car

    console.log(make)
    console.log(model)
    console.log(img)
    console.log(car)

    return(
        <div key={id} className="car-listing">
          <img src={img} alt={`${make} ${model}`} />
          <p>{`${make} ${model}`}</p>
        </div>
    )
  });

  return (
    <div>
      <h2>Car Listings</h2>
      <div className="car-listings">
        {carItems}
      </div>
    </div>
  );
};

export default CarInventory;