import { UseFormRegister } from 'react-hook-form';
import { LoginForm } from '../../../hooks/auth/useAuth';

interface Props {
  register: UseFormRegister<LoginForm>;
  error: string | undefined;
  placeHolder: string;
  type: string;
}

function Input({ register, error, placeHolder, type }: Props) {
  return (
    <>
      <input
        className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3"
        type={type}
        placeholder={placeHolder}
        {...register}
      />
      {error && <p className="text-left text-sm text-red-500">{error}</p>}
    </>
  );
}

export default Input;
