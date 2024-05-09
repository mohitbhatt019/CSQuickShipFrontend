import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const Navigation = (props) => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  ); 
};

export default Navigation;