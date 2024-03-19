import { useOutletContext } from 'react-router-dom';
import Card from '../Card/Card';

const Shop = () => {
  const { data, error, loading } = useOutletContext();

  if (error) return <main>{error}</main>;
  if (loading) return <main>Loading...</main>;

  return (
    <>
      <main>
        {Object.keys(data).map((id) => (
          <Card key={id} {...data[id]} />
        ))}
      </main>
    </>
  );
};

export default Shop;
