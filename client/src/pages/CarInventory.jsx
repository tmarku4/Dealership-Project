import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';

function CarInventory(){
    const [carData, setCarData] = useState([])
    const [filteredCars, setFilteredCars] = useState([]);
    const [filters, setFilters] = useState({
      bodyStyle: '',
      year: '',
      make: '',
      model: '',
    });

     // fetch car data //
     useEffect(() => {
      fetch('http://localhost:3000/vehicles')
      .then((resp) => {
        if (resp.ok){
          resp.json().then((data) => {
            setCarData(data);
            setFilteredCars(data);
          })
        }
      })
    }, [])

    /////// SEARCH BAR ///////

    // builds car year options from 1900
    const yearOptions = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      yearOptions.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    // builds car make options based on fetched car data => maybe change to a permananent list?
    const makeOptions = [];
    // filters out any duplicates for car makes in the car data using Set object
    const makeSet = new Set(carData.map(car => car.make));
    // spread the set into a list again
    const currentMakes = [...makeSet];
    // iterate through the list and make options
    currentMakes.forEach((make) => {
      makeOptions.push(
        <option key={make} value={make}>
        {make}
      </option>
      )
    });

    // repeat for body styles (maybe can combine into one?)
    const bodyStyleOptions =[];
    const bodyStyleSet= new Set(carData.map(car => car.body_style));
    const currentBodyStyles = [...bodyStyleSet]
    currentBodyStyles.forEach((bodyStyle) => {
      bodyStyleOptions.push(
        <option key={bodyStyle} value={bodyStyle}>
          {bodyStyle}
        </option>
      )
    })

    ////////////////////////////////////////

    return (
      <div>
        <h2>Car Listings</h2>
        <div className="search-form">

          <select id="year" value={filters.year}>
            <option value="">Select Year</option>
            {yearOptions}
          </select>

          <select name="make" value={filters.make}>
            <option value="">Select Make</option>
            {makeOptions}
          </select>

          <input
            type="text"
            name="model"
            value={filters.model}
            placeholder="Search by Model"
          />

          <select id="bodyStyle" value={filters.bodyStyle}>
            <option value="">Select Body Style</option>
            {bodyStyleOptions}
          </select>

          <input
            type="range"
            name="price"
            min="0"
            max="100000"
            step="10000"
            value={filters.price}
          />

        </div>

        <div className="car-listings">
          <CarCard carData={carData}/>
        </div>
      </div>
    );
};

export default CarInventory;