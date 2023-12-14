
// pages for site routing
import Home from "./components/Home.js";
import CarInventory from "./pages/CarInventory";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";
  
  // client side routing //
  const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
          {
            path: "/",
            element: <LandingPage />
          },
          {
            path: "/inventory",
            element: <CarInventory />
          },
          {
            path: "/profile/:profileID",
            element: <UserProfile />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/login",
            element: <LoginPage />
          },
          {
            path: "/signup",
            element: <SignUpPage />
          }
      ]
    }
  ]

  export default routes