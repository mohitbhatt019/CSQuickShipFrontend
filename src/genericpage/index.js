import React, { useContext } from "react";
import NavBar from "../screens/NavBar";
import Sidebar from "../screens/sidebar/Sidebar";


export default function GenericPage({ children }) {
  return (
    <>
<NavBar/>
<Sidebar/>
      <div>
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  );
}
