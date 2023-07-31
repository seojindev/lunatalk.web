import Button from '../../auth/elements/Button';
import Input from '../elements/Input';

interface Props {
  register: any;
  errors: any;
  postcodeHandler: () => void;
}

function DeliveryInformation(props: Props) {
  const { register, errors, postcodeHandler } = props;
  return (
    <div className="flex-grow flex flex-col gap-3 w-[50%] tablet:w-full">
      <h2 className="text-xl font-semibold tracking-[-1px]">배송정보</h2>
      <div className="flex flex-col gap-3">
        <Input
          id="name"
          name="이름"
          register={register('name', { required: '이름을 입력해주세요.' })}
          error={errors.name?.message}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#000] font-semibold">
            주소
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px] w-full"
              disabled
              placeholder="우편번호"
              {...register('zipcode', { required: '주소를 검색해주세요.' })}
            />
            <Button
              type="button"
              text="검색"
              className="rounded !py-3"
              onClick={postcodeHandler}
            />
          </div>
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px] w-full"
            disabled
            placeholder="주소"
            {...register('address1', { required: '주소를 검색해주세요.' })}
          />
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px] w-full"
            placeholder="나머지 주소"
            {...register('address2', {
              required: '나머지 주소를 입력해주세요.',
            })}
          />
          {errors.address1?.message && (
            <span className="text-[red] -tracking-normal">
              {errors.address1.message}
            </span>
          )}
          {errors.address2?.message && (
            <span className="text-[red] -tracking-normal">
              {errors.address2.message}
            </span>
          )}
        </div>
      </div>
      <Input
        id="phone"
        name="휴대폰번호"
        register={register('phone', {
          required: '- 없이 휴대폰번호를 입력해주세요. ',
        })}
        error={errors.phone?.message}
      />
      <Input
        id="message"
        name="배송메세지"
        register={register('message', {
          required: '배송메세지를 입력해주세요.',
        })}
        error={errors.message?.message}
      />
    </div>
  );
}
export default DeliveryInformation;
