import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import { resetAuthStates } from "../store/reducers/authValidateSlice";

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
      dispatch(resetAuthStates());
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
