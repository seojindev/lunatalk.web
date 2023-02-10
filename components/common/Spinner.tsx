import { useIsFetching } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';

function Spinner() {
  const isFetching = useIsFetching();
  if (isFetching) {
    return (
      <div className="relative w-full h-[100vh] bg-transparent">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <MoonLoader color="#000" />
        </div>
      </div>
    );
  }
}

export default Spinner;
