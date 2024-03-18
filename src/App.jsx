import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
