import React, { createContext, useState } from "react";

export const HideSideBarContext = createContext();

export const HideSideBarProvider = ({ children }) => {
  const [sideBarHide, setSideBarHide] = useState(false);

  const sideBarToggleHandel = () => {
    setSideBarHide(!sideBarHide);
  };

  return (
    <HideSideBarContext.Provider value={{ sideBarHide, sideBarToggleHandel }}>
      {children}
    </HideSideBarContext.Provider>
  );
};
