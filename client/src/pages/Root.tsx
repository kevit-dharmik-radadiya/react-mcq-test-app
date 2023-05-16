import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import Layout from '../components/Layout/Layout';
import { resetAuthStates } from '../store/reducers/authValidateSlice';
import { RootState } from '../app/store';

const Root = () => {
  const authStatus: boolean = useAppSelector(
    ({ auth }: RootState) => auth?.authStatus ?? false
  );

  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/forgot-password' ||
      location.pathname === '/reset-password'
    ) {
      dispatch(resetAuthStates());
    }
  }, [location, dispatch]);

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
