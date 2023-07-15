import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { findLoginId, findPassword } from '../../lib/api/auth';
import { toast } from 'react-toastify';

interface Props {
  findType: string;
}

interface FindForm {
  loginId?: string;
  email: string;
}

function useFind(props: Props) {
  const { findType } = props;

  const defaultValues =
    findType === 'password' ? { loginId: '', email: '' } : { email: '' };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FindForm>({ mode: 'onSubmit', defaultValues });

  const { mutate: findLoginIdMutate, isLoading: findLoginIdLoading } =
    useMutation(({ email }: { email: string }) => findLoginId(email), {
      onSuccess: (data) => {
        reset();
        toast.success(data.message);
      },
    });

  const { mutate: findPasswordMutate, isLoading: findPasswordLoading } =
    useMutation(
      ({ email, loginId }: { email: string; loginId: string }) =>
        findPassword(email, loginId),
      {
        onSuccess: (data) => {
          reset();
          toast.success(data.message);
        },
      },
    );

  const onSubmit = (data: FindForm) => {
    if (findType === 'password' && data.loginId) {
      return findPasswordMutate({ loginId: data.loginId, email: data.email });
    }
    return findLoginIdMutate({ email: data.email });
  };

  const isLoading =
    findType === 'password' ? findPasswordLoading : findLoginIdLoading;

  return { register, onSubmit: handleSubmit(onSubmit), isLoading, errors };
}

export default useFind;
