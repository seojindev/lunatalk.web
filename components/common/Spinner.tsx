import { useIsFetching } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';

function Spinner() {
  const isFetching = useIsFetching();
  if (!isFetching) return <div></div>;
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <MoonLoader color="#000" />
    </div>
  );
}

export default Spinner;
