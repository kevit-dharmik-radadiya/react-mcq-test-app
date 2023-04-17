import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import { UnProtectedRoute } from "./UnProtectedRoute";
import { ProtectedRoute } from "./ProtectedRoute";

export const ROUTE_CONSTANTS_VARIABLE = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  REGISTER: "/register",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        element: (
          <UnProtectedRoute>
            <Login />
          </UnProtectedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <UnProtectedRoute>
            <Register />
          </UnProtectedRoute>
        ),
      },
      {
        path: "dashboard",
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
    element: <Navigate to="dashboard" replace />,
  },
]);
