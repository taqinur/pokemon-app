import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/pokemon/:id',
        element: <Home></Home>,
    }
])