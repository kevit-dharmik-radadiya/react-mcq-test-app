import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hook";

interface Props {
  children?: ReactNode;
}

export const UnProtectedRoute = ({ children, ...props }: Props) => {
  let location = useLocation();
  const authStatus: boolean = useAppSelector(
    ({ auth }: Record<string, any>) => auth?.authStatus ?? false
  );
  if (authStatus) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children as any;
};
