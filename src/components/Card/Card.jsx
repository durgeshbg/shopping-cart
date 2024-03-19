import PropTypes from 'prop-types';
import { StyledCard } from './Card.styles';

const Card = ({ title, description, category, image, price, rating }) => {
  return (
    <>
      <StyledCard>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='category'>Categories: {category}</div>
        <div className='price'>Price: {price}$</div>
        <div className='rating'>
          Rate: {rating.rate} - Count: {rating.count}
        </div>
        <div>
          <img src={image} alt={title} />
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
