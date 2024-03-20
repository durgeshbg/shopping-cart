import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styles';
import PropTypes from 'prop-types';

const Navbar = ({ cartLen }) => {
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
            Cart<span>{cartLen}</span>
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  cartLen: PropTypes.number,
};

export default Navbar;
