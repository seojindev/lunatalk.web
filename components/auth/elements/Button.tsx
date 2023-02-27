import cn from 'classnames';
import { MoonLoader } from 'react-spinners';

interface Props {
  text: string;
  isLoading: boolean;
}

function Button({ text, isLoading }: Props) {
  return (
    <button
      type="submit"
      className={cn(
        ' text-[#333] hover:bg-[#a749ff] w-full py-4 hover:text-white transition-all ease-in-out duration-300 mobile:text-sm mobile:p-3 flex justify-center',
        { 'bg-[#a749ff]': isLoading },
        { 'bg-[#f2f2f2]': !isLoading },
      )}
      disabled={isLoading}
    >
      {isLoading ? <MoonLoader color="#000" size={18} /> : text}
    </button>
  );
}

export default Button;
