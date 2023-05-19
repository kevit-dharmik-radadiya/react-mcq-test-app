import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
import { RootState } from '../app/store';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const location = useLocation();
  const authStatus: boolean = useAppSelector(
    ({ auth }: RootState) => auth?.authStatus ?? false
  );
  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
