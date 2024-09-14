import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Product from "../pages/Product/Product";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import AboutUs from "../pages/AboutUs/AboutUs";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/Shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "product",
        element: <Product />,
      },
      {
        index: true,
        path: "manage-product",
        element: <ProductManagement />,
      },
      {
        index: true,
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        index: true,
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
