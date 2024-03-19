import { useOutletContext } from 'react-router-dom';
import { StyledShop } from './Shop.styles';
import Card from '../Card/Card';

const Shop = () => {
  const { rawdata, cart, setCart } = useOutletContext();
  const { data, error, loading } = rawdata;

  if (error) return <StyledShop>{error}</StyledShop>;
  if (loading) return <StyledShop>Loading...</StyledShop>;

  return (
    <>
      <StyledShop>
        {Object.keys(data).map((id) => (
          <Card
            key={id}
            id={data[id].id}
            title={data[id].title}
            category={data[id].category}
            image={data[id].image}
            price={data[id].price}
            rating={data[id].rating}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </StyledShop>
    </>
  );
};

export default Shop;
