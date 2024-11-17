import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

import AllCards from "../components/AllCards";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("../allproduct.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categoory.json"),
        children: [
          {
            path: "/",
            element: <AllCards></AllCards>,
            loader: () => fetch("/allproduct.json"),
          },
          {
            path: "/cards/:category",
            element: <AllCards></AllCards>,
            loader: () => fetch("../allproduct.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../allproduct.json"),
      },
    ],
  },
]);

export default router;
