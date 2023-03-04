import cn from 'classnames';
import { MoonLoader } from 'react-spinners';

interface Props {
  text: string;
  isDisabled: boolean;
  isLoading: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  buttonType?: 'full' | 'not-full';
}

function Button({
  text,
  isDisabled,
  isLoading,
  type,
  onClick,
  buttonType = 'full',
}: Props) {
  return (
    <button
      type={type ?? 'submit'}
      className={cn(
        ' text-[#333] hover:bg-[#a749ff] w-full py-4 hover:text-white transition-all ease-in-out duration-300 mobile:text-sm mobile:p-3 flex justify-center',
        { 'bg-[#f2f2f2]': isDisabled },
        { 'bg-[#a749ff] text-white': !isDisabled },
        { 'w-[100px]': buttonType === 'not-full' },
      )}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <MoonLoader color="#000" size={18} /> : text}
    </button>
  );
}

export default Button;
