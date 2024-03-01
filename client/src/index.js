import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/AccountHome";
import Login from "./views/pages/Login";
import NotFound from "./views/pages/404";
import Forgot from "./views/pages/Forgot";
import SignUp from "./views/pages/SignUp";
import ResetPassword from "./views/pages/ResetPassword";

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
  {
    path: "/home/:username",
    element: <Home />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/reset-password/:username/:today/:hash",
    element: <ResetPassword />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
