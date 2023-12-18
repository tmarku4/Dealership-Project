import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Home() {
  const [newModel, setNewModel] = useState({});

  function buildNewModel(event) {
    const { value, name } = event.target;
    setNewModel({
      ...newModel,
      [name]: value
    });
  }

  function formPostRoute(event, postRoute, successCallback) {
    event.preventDefault();

    fetch(`http://localhost:3000/${postRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newModel)
    })
      .then((res) => {
        if (res.ok) {
          return res.json().then((returnedData) => {
            if (successCallback && typeof successCallback === "function") {
              successCallback(returnedData);
            }
          });
        } else {
          // Handle error
          console.error("Error:", res.status, res.statusText);
        }
      })
      .catch((error) => {
        console.log(`${error}`);
      });
  }

  return (
    <div className="home-container">
      <NavBar />
      <Outlet
        context={{
          buildNewModel: buildNewModel,
          formPostRoute: formPostRoute
        }}
      />
    </div>
  );
}

export default Home;

