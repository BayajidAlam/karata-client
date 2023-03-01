import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyReview from "../Pages/MyReview/MyReview";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import SingleService from "../Pages/SingleService/SingleService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://karata-server.vercel.app/services/${params.id}`
          );
        },
        element: <SingleService />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: <AddService />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);
