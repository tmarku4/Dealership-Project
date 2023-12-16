import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function ListCar(){
    const  { buildNewModel, formPostRoute, setCarData } = useOutletContext()
    const navigate = useNavigate()

    function handleFormSubmit(event){
        formPostRoute(event, "vehicles", (returnedData) => {
            setCarData(returnedData)
            navigate(`/inventory`)
        })
    }

    function onFormValueInput(event){
        buildNewModel(event)
    }

    return (
        <form
        className="user-form"
        onSubmit={handleFormSubmit}
        >
            <input
            type="text"
            name="year"
            placeholder="Year..."
            onChange={onFormValueInput}
            />
            <input
            type="text"
            name="make"
            placeholder="Brand..."
            onChange={onFormValueInput}
            />
            <input
            type="text"
            name="model"
            placeholder="Model..."
            onChange={onFormValueInput}
            />
            <select 
            name="body_style"
            onChange={onFormValueInput}
            >
                <option value="coupe">Coupe</option>
                <option value="sedan">Sedan</option>
                <option value="wagon/hatchback">Wagon/Hatchback</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup</option>
            </select>
            <input
            type="float"
            name="price"
            placeholder="List Price..."
            onChange={onFormValueInput}
            />
            <input
            type="text"
            name="img"
            placeholder="Upload Image Link..."
            onChange={onFormValueInput}
            />
            <button 
            type="submit"
            >List</button>
        </form>
    )
}

export default ListCar