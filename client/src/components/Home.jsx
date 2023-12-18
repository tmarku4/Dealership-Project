import React, { useState } from "react";
import NavBar from "./NavBar";
import HeroSlider from "./HeroSlider";
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
      
      {/* Add the HeroSlider component here */}
      <HeroSlider />

      <div className="home-content">
        <div className="hero-section">
          <h1>Your Dream Car Awaits</h1>
          <p>Explore the latest models and find the perfect match for you.</p>
        </div>

        {/* Stylish form for creating a new car model */}
        <form
          className="new-model-form"
          onSubmit={(e) => formPostRoute(e, "newModelRoute")}
        >
          <h2>Create a New Car Model</h2>
          <div className="form-input">
            <label>Model Name:</label>
            <input
              type="text"
              name="modelName"
              value={newModel.modelName || ""}
              onChange={buildNewModel}
            />
          </div>
          <div className="form-input">
            <label>Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              value={newModel.manufacturer || ""}
              onChange={buildNewModel}
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit">Create Model</button>
        </form>
      </div>
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

