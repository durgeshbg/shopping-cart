import { useState } from 'react';
import { StyledCartDashBoard } from './CartDashBoard.styles';
import PropTypes from 'prop-types';

const CartDashBoard = ({ id, cart, setCart }) => {
  const [q, setQ] = useState(0);
  const [error, setError] = useState('');

  const incQ = () => setQ(Number(q) + 1);
  const decQ = () => setQ(Number(q) - 1);
  const inCart = (cart, id) => {
    let index = -1;
    cart.forEach((obj, i) => {
      if (obj.id === id) index = i;
    });
    return index;
  };

  const addToCart = () => {
    if (q <= 0) setError('Quantity invalid!');
    else {
      const i = inCart(cart, id);
      if (i !== -1) {
        const newCart = [...cart];
        newCart[i].q += q;
        setCart(newCart);
      } else setCart([...cart, { id: id, q: q }]);
      setError('');
      setQ(0);
    }
  };

  return (
    <StyledCartDashBoard>
      {error && <div className='error'>{error}</div>}
      <div className='cart'>
        <div className='quantity'>
          <button onClick={decQ}>-</button>
          <input value={q} onChange={(e) => setQ(e.target.value)} />
          <button onClick={incQ}>+</button>
        </div>
        <button onClick={addToCart}>Add Cart</button>
      </div>
    </StyledCartDashBoard>
  );
};

CartDashBoard.propTypes = {
  id: PropTypes.number,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default CartDashBoard;
