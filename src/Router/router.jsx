import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>

        }
    ]
  },
]);
