import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto text-black p-2 md:pl-20 lg:pr-20 bg-white min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
