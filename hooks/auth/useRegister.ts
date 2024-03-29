import { RegisterRequest } from './../../types/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { phoneAuth, phoneAuthConfirm, signUp } from '../../lib/api/auth';
import { emailAddressState } from '../../states/initData';

export interface RegisterForm {
  authIndex: number | null;
  userEmail: string;
  userEmailAddress: string;
  userId: string;
  userName: string;
  userPassword: string;
  userPasswordConfirm: string;
  userSelectEmail: boolean;
  userSelectMessage: boolean;
}

export interface PhoneAuth {
  phoneNumber: string;
  authCode: string;
  authIndex: number | null;
}

function useRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<RegisterForm>({
    mode: 'onSubmit',
    defaultValues: {
      authIndex: null,
      userEmail: '',
      userEmailAddress: '',
      userId: '',
      userName: '',
      userPassword: '',
      userPasswordConfirm: '',
      userSelectEmail: false,
      userSelectMessage: false,
    },
  });

  const [auth, setAuth] = useState<{
    authIndex: number | null;
    phoneNumber: string;
    authCode: string;
    isComplete: boolean;
  }>({
    authIndex: null,
    phoneNumber: '',
    authCode: '',
    isComplete: false,
  });
  const router = useRouter();

  const { mutate: signUpMutate, isLoading: signUpLoading } = useMutation(
    (registerData: RegisterRequest) => signUp(registerData),
    {
      onSuccess: (data) => {
        if (data?.id) {
          reset();
          toast.success('회원가입 되었습니다.');
          router.push('/auth/login');
        }
      },
    },
  );

  const { mutate: authConfirm, isLoading: authConfirmLoading } = useMutation(
    ({ authIndex, authCode }: { authIndex: number; authCode: string }) =>
      phoneAuthConfirm(authIndex, authCode),
    {
      onSuccess: (data) => {
        if (data?.auth_index) {
          setAuth({ ...auth, isComplete: true });
          setValue('authIndex', data.auth_index);
          toast.success('인증 완료 되었습니다.');
        }
      },
    },
  );

  const { mutate: phoneAuthMutate, isLoading: phoneAuthLoading } = useMutation(
    (phoneNumber: string) => phoneAuth(phoneNumber),
    {
      onSuccess: (data) => {
        if (data?.auth_index) {
          setAuth({ ...auth, authIndex: data.auth_index });
          toast.success('인증번호가 전송되었습니다.');
        }
      },
    },
  );

  const authOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuth({ ...auth, [e.target.name]: e.target.value });
    },
    [auth],
  );

  const onEmailAddressChange = useCallback(
    (item: any) => {
      setValue('userEmailAddress', item.label);
    },
    [getValues()],
  );
  const emailOptions = useRecoilValue(emailAddressState);

  const authCodeSend = useCallback(
    (phoneNumber: string) => {
      phoneAuthMutate(phoneNumber);
    },
    [auth],
  );

  const authCodeConfirm = useCallback(
    (authIndex: number | null, authCode: string) => {
      if (!authIndex) {
        return toast.warning('인증을 다시 시도해 주세요.');
      }
      authConfirm({ authIndex, authCode });
    },
    [auth],
  );

  const onSubmit = (registerData: any) => {
    signUpMutate(registerData);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    auth,
    emailOptions,
    authOnChange,
    onEmailAddressChange,
    authCodeSend,
    authCodeConfirm,
    register,
    errors,
    values: getValues(),
    signUpLoading,
    authConfirmLoading,
    phoneAuthLoading,
  };
}

export default useRegister;
