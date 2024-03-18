import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <p>
          Discover endless possibilities as you explore our diverse range of products,
          from the latest tech gadgets to stylish fashion trends, home essentials, and
          much more. Whether you&#39;re searching for that perfect gift, upgrading your
          wardrobe, or sprucing up your living space, we&#39;ve got you covered.
        </p>
        <Link to='/shop'>Go to shopping...</Link>
    </>
  );
};

export default Home;
