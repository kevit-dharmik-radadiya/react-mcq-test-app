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
import { ROUTE_CONSTANTS_VARIABLE } from "../constants/routeConstants";
import Submissions from "../pages/Submissions/Submissions";
import Quiz from "../pages/Quiz/Quiz";

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
      {
        path: ROUTE_CONSTANTS_VARIABLE.QUIZ,
        element: (
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTE_CONSTANTS_VARIABLE.SUBMISSIONS,
        element: (
          <ProtectedRoute>
            <Submissions />
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
