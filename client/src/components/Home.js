import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";

function Home(){
    // const [carData, setCarData] = useState([])
    const [users, setUsers] = useState([])
    const [carData, setCarData] = useState([])
    const [newModel, setNewModel] = useState({})
    const [loggedIn, setLoggedIn] = useState(true)
  
    const navigate = useNavigate()

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
        .then(response => {
            if (response.ok) {
                return response.json().then((returnedData) => {
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
            <NavBar loggedIn={loggedIn} />
            <Outlet context={
                {setUsers:setUsers, 
                buildNewModel:buildNewModel, 
                formPostRoute:formPostRoute,
                carData:carData,
                setCarData: setCarData}} />
        </>
    )
}

export default Home