import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import AuthForm from '../../../components/auth/elements/AuthForm';
import Button from '../../../components/auth/elements/Button';
import Input from '../../../components/auth/elements/Input';
import { phoneAuth, phoneAuthConfirm, signUp } from '../../../lib/api/auth';
import { emailAddressState } from '../../../states/initData';

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

function Register() {
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

  const authOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuth({ ...auth, [e.target.name]: e.target.value });
    },
    [auth],
  );

  const onChange = useCallback(
    (item: any) => {
      setValue('userEmailAddress', item.label);
    },
    [getValues()],
  );
  const options = useRecoilValue(emailAddressState);

  const authCodeSend = useCallback(
    async (phoneNumber: string) => {
      const data = await phoneAuth(phoneNumber);

      if (data?.auth_index) {
        setAuth({ ...auth, authIndex: data.auth_index });
        toast.success('인증번호가 전송되었습니다.');
      }
    },
    [auth],
  );

  const authCodeConfirm = useCallback(
    async (authIndex: number | null, authCode: string) => {
      if (!authIndex) {
        return toast.warning('인증을 다시 시도해 주세요.');
      }
      const data = await phoneAuthConfirm(authIndex, authCode);

      if (data?.auth_index) {
        setAuth({ ...auth, isComplete: true });
        setValue('authIndex', data.auth_index);
        toast.success('인증 완료 되었습니다.');
      }
    },
    [auth],
  );

  const onSubmit = async (registerData: any) => {
    const data = await signUp(registerData);
    if (data?.id) {
      reset();
      toast.success('회원가입 되었습니다.');
      router.push('/auth/login');
    }
  };

  return (
    <AuthForm handleSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register('userId', {
          required: '아이디를 입력해주세요.',
        })}
        error={errors.userId?.message}
        placeHolder={'아이디'}
        type={'text'}
      />
      <Input
        register={register('userPassword', {
          required: '비밀번호를 입력해주세요.',
        })}
        error={errors.userPassword?.message}
        placeHolder={'비밀번호'}
        type={'password'}
      />
      <Input
        register={register('userPasswordConfirm', {
          required: '비밀번호를 한번더 입력해주세요.',
          validate: {
            matchesPreviousPassword: (value) => {
              return getValues().userPassword === value
                ? true
                : '비밀번호가 일치하지 않습니다.';
            },
          },
        })}
        error={errors.userPasswordConfirm?.message}
        placeHolder={'비밀번호 확인'}
        type={'password'}
      />
      <Input
        register={register('userName', {
          required: '이름을 입력해주세요.',
        })}
        error={errors.userName?.message}
        placeHolder={'이름'}
        type={'이름'}
      />
      <div className="flex justify-between gap-3 items-center">
        <Input
          register={register('userEmail', {
            required: '이메일을 입력해주세요.',
          })}
          error={errors.userEmail?.message}
          placeHolder={'이메일'}
          type={'text'}
        >
          <p>@</p>
          <div className="w-full h-full">
            <Select
              className="tablet:text-[14px]"
              id="email-select-box"
              {...register('userEmailAddress', {
                required: '이메일을 선택해주세요.',
              })}
              instanceId="email-select-box"
              options={options}
              onChange={onChange}
              defaultValue={options[0]}
              placeholder="이메일을 선택해주세요."
            />
          </div>
        </Input>
      </div>
      <div className="flex flex-row gap-3">
        <Input
          placeHolder="휴대폰번호 010부터 - 없이 입력"
          type="text"
          name="phoneNumber"
          value={auth.phoneNumber}
          onChange={authOnChange}
          disabled={!!auth.authIndex}
        />
        {!auth.isComplete && (
          <Button
            text="전송"
            type="button"
            buttonType="not-full"
            isDisabled={auth.phoneNumber === '' || !!auth.authIndex}
            isLoading={false}
            onClick={() => authCodeSend(auth.phoneNumber)}
          />
        )}
      </div>
      {auth.authIndex && !auth.isComplete ? (
        <div className="flex flex-row gap-3">
          <Input
            placeHolder="인증번호를 입력해주세요."
            type="text"
            name="authCode"
            value={auth.authCode}
            onChange={authOnChange}
          />
          <Button
            text="확인"
            type="button"
            buttonType="not-full"
            isDisabled={auth.authCode === '' || !auth.authIndex}
            isLoading={false}
            onClick={() => authCodeConfirm(auth.authIndex, auth.authCode)}
          />
        </div>
      ) : null}

      <div className="flex flex-col -tracking-[1px] text-sm gap-1">
        <label className="flex flex-row gap-3">
          <input type="checkbox" {...register('userSelectEmail')} />
          <span>마케팅 알림 메일 수신 동의 (선택)</span>
        </label>
        <label className="flex flex-row gap-3">
          <input type="checkbox" {...register('userSelectMessage')} />
          <span>맞춤 혜택 알림 문자 수신 동의 (선택)</span>
        </label>
      </div>

      <Button text="회원가입" isLoading={false} isDisabled={false} />
    </AuthForm>
  );
}

export default Register;
