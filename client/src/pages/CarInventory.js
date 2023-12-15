import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import { useOutletContext } from 'react-router-dom';

function CarInventory(){
    const {carData, setCarData} = useOutletContext()

     // fetch car data //
     useEffect(() => {
      fetch('http://localhost:3000/cars')
      .then((resp) => resp.json())
      .then((data) => setCarData(data))
    }, [])

  return (
    <div>
      <h2>Car Listings</h2>
      <div className="car-listings">
        <CarCard carData={carData}/>
      </div>
    </div>
  );
};

export default CarInventory;