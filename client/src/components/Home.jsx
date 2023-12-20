import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="home-container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Home;

