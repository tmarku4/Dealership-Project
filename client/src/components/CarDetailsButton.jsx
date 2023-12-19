import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function CarDetailsButton(){
    const navigate = useNavigate()
    const location = useLocation()

    const inDetailsPage = location.pathname.startsWith("/vehicle/");

    function onDetailClick(event){
        const carID = event.target.parentNode.id
        if (inDetailsPage){
            navigate(`/inventory`)
        } else {
            navigate(`/vehicle/${carID}`)
        }
    }

    return (
        <button 
        className="details-button"
        onClick ={onDetailClick}>
            {inDetailsPage ? 'Return to Inventory' : 'More Details'}
        </button>
    )
}

export default CarDetailsButton