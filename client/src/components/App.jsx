import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Cloudinary} from "@cloudinary/url-gen";

// components for site
import Header from "./Header";

// routes for client-side
import routes from "../routes";

function App() {

  const router = createBrowserRouter(routes)
  const cld = new Cloudinary({cloud: {cloudName: 'dq0gpy4yy'}});

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <RouterProvider router={router}/>
      </main>
    </div>
  )
}

export default App;
