import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/AccountHome";
import Login from "./views/Login";
import NotFound from "./views/404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
