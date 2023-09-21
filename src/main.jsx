import React from "react";
import ReactDOM from "react-dom/client";
import "../output.css";
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

const router = createBrowserRouter([
  {
    path: "/rutina",
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
    path: "/Thursday",
    element: <Thursday />
  },
  {
    path: "/friday",
    element: <Friday />
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
