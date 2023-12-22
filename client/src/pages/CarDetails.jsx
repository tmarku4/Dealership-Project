import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";

function CarDetails() {
  const [vehicle, setVehicle] = useState([]);
  const [details, setdetails] = useState({})
  const { vehicleID } = useParams();

  useEffect(() => {
    fetch(`/cars/${vehicleID}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((returnedData) => {
            console.log(returnedData)
            setdetails(returnedData)
            setVehicle([returnedData]);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching vehicle:', error);
      });
  }, []);

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vehicle.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + vehicle.images.length) % vehicle.images.length);
//   };

  if (!vehicle) {
    return null;
  }

//   console.log(vehicle.images)
//   console.log(vehicle.images[currentImageIndex])

  return (
    <div className="car-details-container">
      <div key={vehicle.id}>
        {/* Display the vehicle image slider */}
        {/* <div className="image-slider">
          <img src={vehicle.images[currentImageIndex]} alt={`${vehicle.make} ${vehicle.model}`} />
          <button onClick={prevImage}>&lt;</button>
          <button onClick={nextImage}>&gt;</button>
        </div> */}

        {/* Render CarCard component with vehicle data */}
        <CarCard carData={vehicle} />

        {/* Additional details section */}
        <div className="additional-details">
          <h2>Additional Details</h2>
          <p>
            <strong>Model Year:</strong> {details.year}
          </p>
          <p>
            <strong>Make:</strong> {details.make}
          </p>
          <p>
            <strong>Model:</strong> {details.model}
          </p>
          <p>
            <strong>Color:</strong> {details.body_color}
          </p>
          {/* Additional details */}
          <p>
            <strong>Body Style:</strong> {details.body_style}
          </p>
          <p>
            <strong>Engine HP / Torque:</strong> {details.engine_horse_power} / {details.engine_torque}
          </p>
          <p>
            <strong>Mileage:</strong> {details.total_miles} miles
          </p>
          <p>
            <strong>Price:</strong> ${details.price}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;