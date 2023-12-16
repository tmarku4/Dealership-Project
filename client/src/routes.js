
// pages for site routing
import Home from "./components/Home";
import CarInventory from "./pages/CarInventory";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";
import ListCar from "./pages/ListCar";
import CarDetails from "./pages/CarDetails";
import ShoppingCart from "./pages/ShoppingCart";
import UserFavorites from "./pages/UserFavorites";
  
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
            path: "/vehicle/:vehicleID",
            element: <CarDetails />
          },
          {
            path: "/profile/:profileID",
            element: <UserProfile />
          },
          {
            path: "/sellcar",
            element: <ListCar />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/shoppingcart",
            element: <ShoppingCart />
          },
          {
            path: "/myfavorites",
            element: <UserFavorites />
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