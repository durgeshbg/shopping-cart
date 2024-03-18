import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './components/Error/Error';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
