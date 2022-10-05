import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
