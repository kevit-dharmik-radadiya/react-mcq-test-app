import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import { UnProtectedRoute } from "./UnProtectedRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

export const ROUTE_CONSTANTS_VARIABLE = {
  ROOT: "/",
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
};

export const router = createBrowserRouter([
  {
    path: ROUTE_CONSTANTS_VARIABLE.ROOT,
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ROUTE_CONSTANTS_VARIABLE.LOGIN,
        element: (
          <UnProtectedRoute>
            <Login />
          </UnProtectedRoute>
        ),
      },
      {
        path: ROUTE_CONSTANTS_VARIABLE.REGISTER,
        element: (
          <UnProtectedRoute>
            <Register />
          </UnProtectedRoute>
        ),
      },
      {
        path: ROUTE_CONSTANTS_VARIABLE.FORGOT_PASSWORD,
        element: (
          <UnProtectedRoute>
            <ForgotPassword />
          </UnProtectedRoute>
        ),
      },
      {
        path: `${ROUTE_CONSTANTS_VARIABLE.RESET_PASSWORD}/:id`,
        element: (
          <UnProtectedRoute>
            <ResetPassword />
          </UnProtectedRoute>
        ),
      },
      {
        path: ROUTE_CONSTANTS_VARIABLE.DASHBOARD,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTE_CONSTANTS_VARIABLE.DASHBOARD} replace />,
  },
]);
