import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "../pages/Home";
import FavoriteList from "../pages/FavoriteList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorite-list",
        element: <FavoriteList />,
      },
    ],
  },
]);

export default router;
