import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Layout from "../components/Layout/Layout";
import { AUTH_VALIDATE_REDUX_CONSTANTS } from "../store/reduxConstants/authValidateReduxConstant";
import { useEffect } from "react";

const Root = () => {
  const authStatus: boolean = useAppSelector(
    ({ auth }: Record<string, any>) => auth?.authStatus ?? false
  );

  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/reset-password"
    ) {
      dispatch({
        type: AUTH_VALIDATE_REDUX_CONSTANTS.RESET_STATES,
      });
    }
  }, [location]);

  return (
    <>
      {authStatus && (
        <Layout>
          <Outlet />
        </Layout>
      )}
      {!authStatus && (
        <main>
          <Outlet />
        </main>
      )}
    </>
  );
};

export default Root;
