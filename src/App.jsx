import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import useFetch from './useFetch';

function App() {
  const data = useFetch('https://fakestoreapi.com/products');
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname == '/shop' ? <Outlet context={data} /> : <Outlet />}
    </>
  );
}

export default App;
