import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CarCard from '../components/CarCard';

function CarInventory(){
  const {carData} = useOutletContext()

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