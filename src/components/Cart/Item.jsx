import PropTypes from 'prop-types';
import { useFetch } from '../../useFetch';
const Item = ({ item }) => {
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${item.id}`
  );
  if (error) throw new Error(error);
  if (loading) return <StyledItem>Loading...</StyledItem>;
  else
    return (
      <div>
        <div className='image'>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='details'>
          <div className='title'>{data.title}</div>
          <div className='category'>{data.category}</div>
          <div className='price'>{data.price} $</div>
          <div className='rating'>
            <span>&#9733; </span>
            {data.rating.rate} - {data.rating.count}
          </div>
        </div>
        <div className='subtotal'>
          Subtotal {item.q} item{item.q > 1 ? 's' : ''}: {item.total} $
        </div>
      </div>
    );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
