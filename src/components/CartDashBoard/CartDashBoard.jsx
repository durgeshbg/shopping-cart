import { useState } from 'react';
import { StyledCartDashBoard } from './CartDashBoard.styles';

const CartDashBoard = () => {
  const [q, setQ] = useState(0);
  const [error, setError] = useState('');

  const incQ = () => setQ(Number(q) + 1);
  const decQ = () => setQ(Number(q) - 1);

  const addToCart = () => {
    if (q <= 0) setError('Quantity invalid!');
    else {
      setError('');
      setQ(0);
    }
  };

  return (
    <StyledCartDashBoard>
      <div className='error'>{error}</div>
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

export default CartDashBoard;
