import PropTypes from 'prop-types';
import { StyledCard } from './Card.styles';
import CartDashBoard from '../CartDashBoard/CartDashBoard';

const Card = ({ id, title, category, image, price, rating, cart, setCart }) => {
  return (
    <>
      <StyledCard>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='details'>
          <div className='title'>{title}</div>
          <div className='category'>{category}</div>
          <div className='review'>
            <div className='price'>{price}$</div>
            <div className='rating'>
              <span>&#9733; </span>
              {rating.rate} - {rating.count}
            </div>
          </div>
        </div>
        <CartDashBoard id={id} cart={cart} setCart={setCart} />
      </StyledCard>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Card;
