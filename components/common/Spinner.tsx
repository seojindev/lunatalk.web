import { MoonLoader } from 'react-spinners';

function Spinner() {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <MoonLoader color="#000" />
      </div>
    </div>
  );
}

export default Spinner;
