import { useOutletContext } from 'react-router-dom';
import Item from './Item';

const Cart = () => {
  const cart = useOutletContext();
  let total = 0;

  return (
    <div>
      {cart.map((item) => {
        total += item.total;
        return <Item key={item.id} item={item} />;
      })}
      <div className='total'>Checkout: {total} $</div>
    </div>
  );
};

export default Cart;
