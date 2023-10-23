import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <MutatingDots
        height="100"
        width="100"
        color="#e8036f"
        secondaryColor="#e8036f"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader;
