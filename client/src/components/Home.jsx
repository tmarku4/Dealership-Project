import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";

function Home(){
    const [newModel, setNewModel] = useState({})

    function buildNewModel(event){
        const { value, name } = event.target
        console.log(value)
        setNewModel({...newModel,
            [name]: value
        })
        console.log(newModel)
    }

    function formPostRoute(event, postRoute, successCallback) {
        event.preventDefault();
    
        fetch(`http://localhost:3000/${postRoute}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newModel)
        })
        .then(res => {
            if (res.ok) {
                return res.json().then((returnedData) => {
                    // allows me to perform data specific navigation/changes with returned data
                    if (successCallback && typeof successCallback === 'function') {
                        successCallback(returnedData);
                    }
                })
                //how would I best handle an error here? wouldn't it just pass throughto the catch?
            } else {
                
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }

    return (
        <>
            <NavBar />
            <Outlet context={
                { 
                buildNewModel:buildNewModel, 
                formPostRoute:formPostRoute
                }} />
        </>
    )
}

export default Home