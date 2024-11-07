import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductDetailsPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routeConfig} />
  </StrictMode>,
);
