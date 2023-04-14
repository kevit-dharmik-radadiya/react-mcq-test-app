import React, { ReactNode } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const ProtectedRoute = ({ children, ...props }: Props) => {
  let location = useLocation();
  const token = false;
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children as any;
};
