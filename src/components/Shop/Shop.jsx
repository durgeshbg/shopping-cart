import { useOutletContext } from 'react-router-dom';
import { StyledShop } from './Shop.styles';
import Card from '../Card/Card';

const Shop = () => {
  const { data, error, loading } = useOutletContext();

  if (error) return <StyledShop>{error}</StyledShop>;
  if (loading) return <StyledShop>Loading...</StyledShop>;

  return (
    <>
      <StyledShop>
        {Object.keys(data).map((id) => (
          <Card key={id} {...data[id]} />
        ))}
      </StyledShop>
    </>
  );
};

export default Shop;
