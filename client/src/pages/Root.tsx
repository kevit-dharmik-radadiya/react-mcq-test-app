import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Layout from "../components/Layout/Layout";
import { AUTH_VALIDATE_REDUX_CONSTANTS } from "../store/reduxConstants/authValidateReduxConstant";

const Root = () => {
  const authStatus: boolean = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer?.authStatus ?? false
  );

  const dispatch = useAppDispatch();
  const location = useLocation();

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
