import { StyledError } from './Error.styles';

const Error = () => {
  return (
    <StyledError>
      <h1>Error 404!</h1>
      <div>
        What your&apos;e looking doesn&apos;t exist. <div className='emoji'>&#9785;</div>
      </div>
    </StyledError>
  );
};

export default Error;
