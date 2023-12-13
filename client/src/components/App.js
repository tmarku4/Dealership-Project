import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./Home";
import CarInventory from "./CarInventory";
import ErrorPage from "./ErrorPage";

function App() {
  const [carData, setCarData] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/cars')
    .then((resp) => resp.json())
    .then((data) => setCarData(data))
  }, [])

  const routes = [
    {
      path: "/",
      element: <Home loggedIn={loggedIn} />,
      errorElement: <ErrorPage />,
      children: [
          {
            path: "/inventory",
            element: <CarInventory carData={carData} />
          }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div>
      <header>
        <h1>Project Client</h1>
      </header>
      <main>
        <RouterProvider router={router}/>
      </main>
    </div>
  )
}

export default App;
