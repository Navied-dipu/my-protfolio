import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber";

export default function RootLayout() {
  return (
    <div className="bg-white min-h-screen">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
}
