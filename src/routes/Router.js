import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import SingleService from "../Pages/SingleService/SingleService";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/services/:id',
        loader:async ({params}) => {
          return fetch(`http://localhost:5000/services/${params.id}`)
        },
        element: <SingleService/>
      }
    ]
  }
])