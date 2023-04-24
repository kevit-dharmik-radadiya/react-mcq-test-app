import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  children?: ReactNode;
}

export const ProtectedRoute = ({ children, ...props }: Props) => {
  let location = useLocation();
  const authStatus: boolean = useSelector(
    ({ authReducer }: Record<string, any>) => authReducer?.authStatus ?? false
  );
  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children as any;
};
