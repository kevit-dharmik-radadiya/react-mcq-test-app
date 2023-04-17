import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const UnProtectedRoute = ({ children, ...props }: Props) => {
  let location = useLocation();
  const token = false;
  if (token) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children as any;
};
