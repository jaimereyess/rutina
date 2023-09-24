import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Monday from "./pages/monday.jsx";
import ErrorPage from "./error-page";
import Tuesday from "./pages/tuesday";
import Wednesday from "./pages/wednesday";
import Thursday from "./pages/thursday";
import Friday from "./pages/friday";
import HomePage from "./pages/homePage";
import "./output.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/monday",
    element: <Monday />
  },
  {
    path: "/tuesday",
    element: <Tuesday />
  },
  {
    path: "/wednesday",
    element: <Wednesday />
  },
  {
    path: "/thursday",
    element: <Thursday />
  },
  {
    path: "/friday",
    element: <Friday />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
