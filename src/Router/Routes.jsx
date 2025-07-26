import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../Pages/Home";
import { Error404 } from "../Components/Shared/404Error";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Hotel from "../Pages/Hotel";
import CheckOut from "../Pages/CheckOut";
import { Flights } from "../Pages/Flights";
import FlightBooking from "../Pages/FlightBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/flight-booking/:id",
        element: <FlightBooking />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/hotels",
        element: <Hotel />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
