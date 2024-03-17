import { StyledButton } from './styles/Button.style';
import PropTypes from 'prop-types';

function Button({ bg, counter, setCounter, color }) {
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <StyledButton onClick={handleClick} bg={bg} color={color}>
        Increment
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  bg: PropTypes.string,
  counter: PropTypes.number,
  setCounter: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
