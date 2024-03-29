import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import useFetch from './useFetch';
import { useState } from 'react';

function App() {
  const rawdata = useFetch('https://fakestoreapi.com/products');
  const [cart, setCart] = useState([]);
  const { pathname } = useLocation();

  return (
    <>
      <Navbar cartLen={cart.length} />
      {pathname == '/' ? (
        <Navigate to='/home' />
      ) : pathname == '/shop' ? (
        <Outlet context={{ rawdata, cart, setCart }} />
      ) : pathname === '/cart' ? (
        <Outlet context={cart} />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
