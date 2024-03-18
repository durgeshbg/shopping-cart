import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styles';

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>ShopIt</h1>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'n')} to='home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='shop'>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='cart'>
            Cart
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
