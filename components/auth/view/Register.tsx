import { FieldErrors } from 'react-hook-form';
import Select from 'react-select';
import { RegisterForm } from '../../../hooks/auth/useRegister';
import AuthForm from '../elements/AuthForm';
import Button from '../elements/Button';
import Input from '../elements/Input';

interface Props {
  onSubmit: () => void;
  register: any;
  errors: FieldErrors<RegisterForm>;
  values: RegisterForm;
  onEmailAddressChange: (item: any) => void;
  emailOptions: { value: string; label: string }[];
  auth: {
    authIndex: number | null;
    phoneNumber: string;
    authCode: string;
    isComplete: boolean;
  };
  authOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  authCodeSend: (phoneNumber: string) => void;
  authCodeConfirm: (authIndex: number | null, authCode: string) => void;
}

function Register(props: Props) {
  const {
    onSubmit,
    register,
    errors,
    values,
    emailOptions,
    onEmailAddressChange,
    auth,
    authOnChange,
    authCodeSend,
    authCodeConfirm,
  } = props;
  return (
    <AuthForm handleSubmit={onSubmit}>
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
            matchesPreviousPassword: (value: string) => {
              return values.userPassword === value
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
              options={emailOptions}
              onChange={onEmailAddressChange}
              defaultValue={emailOptions[0]}
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
