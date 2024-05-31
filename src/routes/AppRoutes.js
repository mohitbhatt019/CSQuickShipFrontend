import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { RoutePath } from "./RoutePath";
import GenericPage from "../genericpage";
import userGlobalConfig from "../constants/globalConfig";
import { AuthContext } from "../context/authContext";
import { useOidc } from "@axa-fr/react-oidc";

export default function AppRoutes() {
  const { isAuthenticatedContext } = useContext(AuthContext);
  const { login, logout, renewTokens, isAuthenticated } = useOidc();

  function publicRoutes() {
    const routes = [
      RoutePath.LOGIN,
      RoutePath.SIGNUP,
      RoutePath.ForgetPassword,
      RoutePath.AuthenticateUrl
    ];
    return routes.map((route, index) => (
      
      <Route
        key={index}
        path={route.path}
        element={<NonProtectedRoute>{route.component}</NonProtectedRoute>}
      />
    ));
  }

  function privateRoutes() {
    const routes = [
      RoutePath.DASHBOARD,
      RoutePath.ABOUT,
      RoutePath.SERVICES,
      RoutePath.CONTACT,
      RoutePath.ORDER,
      RoutePath.TRACKING,
      RoutePath.RATECALCULATOR,
      RoutePath.BILLING,
      RoutePath.KYC,
      RoutePath.CREATEORDERS,
      RoutePath.PRODUCTDETAILS,
      RoutePath.COMPLETEORDER,
      RoutePath.CARRIERCHARGES,
      RoutePath.SHIPPINGRULE
    ];
    return routes?.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<ProtectedRoute>{route.component}</ProtectedRoute>}
      />
    ));
  }

  const ProtectedRoute = (props) => {
    if (!isAuthenticated) {
      // verify the user is authenticated or not
       return <Navigate to="/login" replace />;
    }
    
    return <GenericPage> {props.children}</GenericPage>;
  };

  const NonProtectedRoute = (props) => {
    if (isAuthenticated) {
         return <Navigate to="/" replace />;
    }
    return props.children;
  };

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          {publicRoutes()}
          {privateRoutes()}
        </Routes>
      </Suspense>
    </div>
  );
}
