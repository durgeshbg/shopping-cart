import { useOutletContext } from 'react-router-dom';
import Item from './Item';
import { StyledCart } from './Cart.styles';

const Cart = () => {
  const cart = useOutletContext();
  let total = 0;

  return (
    <StyledCart>
      {cart.map((item) => {
        total += item.total;
        return <Item key={item.id} item={item} />;
      })}
      <div className='total'>Checkout: {total} $</div>
    </StyledCart>
  );
};

export default Cart;
