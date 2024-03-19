import PropTypes from 'prop-types';
import { StyledCard } from './Card.styles';
import { useState } from 'react';

const Card = ({ title, category, image, price, rating }) => {
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
        <div className='error'>{error}</div>
        <div className='cart'>
          <div className='quantity'>
            <button onClick={decQ}>-</button>
            <input value={q} onChange={(e) => setQ(e.target.value)} />
            <button onClick={incQ}>+</button>
          </div>
          <button onClick={addToCart}>Add Cart</button>
        </div>
      </StyledCard>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
};

export default Card;
