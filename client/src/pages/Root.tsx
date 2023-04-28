import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import Layout from "../components/Layout/Layout";

const Root = () => {
  const authStatus: boolean = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer?.authStatus ?? false
  );
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
