import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import Button from '../../components/auth/elements/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import _ from 'lodash';
import { setOrder } from '../../lib/api/order';
import useUser from '../../hooks/user/useUser';
import useOrderMyInformation from '../../hooks/query/useOrderMyInformation';
import { toast } from 'react-toastify';

interface OrderProps {
  items: {
    uuid: string;
    name: string;
    price: {
      number: number;
      string: string;
    };
    count: number;
  }[];
}

interface OrderForm {
  name: string;
  zipcode: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
  message: string;
  product: string[];
}

const Order: NextPage<OrderProps> = ({ items }: OrderProps) => {
  const { accessToken } = useUser();
  const { orderInformation } = useOrderMyInformation();
  const CURRENT_URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);

  const onClickHandler = async () => {
    open({ onComplete: handleComplete });
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      zipcode: '',
      address1: '',
      address2: '',
      phone: '',
      email: '',
      message: '안전하게 배송해주세요.',
      product: [],
    },
  });

  useEffect(() => {
    if (!items.length) return;

    _.forEach(items, (item) => {
      const products = _.times(item.count, _.constant(item.uuid));
      setValue('product', products);
    });
  }, [items]);

  useEffect(() => {
    if (!orderInformation) return;
    setValue('name', orderInformation.name);
    setValue('zipcode', orderInformation.address.zipcode);
    setValue('address1', orderInformation.address.step1 || '');
    setValue('address1', orderInformation.address.step2 || '');
    setValue(
      'phone',
      `${orderInformation.phone_number.step1}${orderInformation.phone_number.step2}${orderInformation.phone_number.step3}`,
    );
    setValue('email', orderInformation.email.full_email);
  }, [orderInformation]);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress +=
        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    setValue('zipcode', data.zonecode);
    setValue('address1', fullAddress);
  };

  const onSubmit = async (data: OrderForm) => {
    const response = await setOrder(data, accessToken);
    if (response && _.has(response, 'pay_url')) {
      window.open(response.pay_url, '_blank', 'width=800, height=800');
    } else {
      toast.warning(response.error_message);
    }
  };

  return (
    <form
      className="flex flex-row gap-5 tablet:flex-col h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-grow flex flex-col gap-3 w-[50%] tablet:w-full">
        <h2 className="text-xl font-semibold tracking-[-1px]">배송정보</h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#000] font-semibold">
              이름
            </label>
            <input
              type="text"
              className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
              {...register('name', { required: '이름을 입력해주세요.' })}
            />
            {errors.name?.message && (
              <span className="text-[red] -tracking-normal">
                {errors.name.message}
              </span>
            )}
          </div>
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
                onClick={onClickHandler}
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
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#000] font-semibold">
            휴대폰번호
          </label>
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
            {...register('phone', {
              required: '- 없이 휴대폰번호를 입력해주세요.',
            })}
          />
          {errors.phone?.message && (
            <span className="text-[red] -tracking-normal">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#000] font-semibold">
            배송메세지
          </label>
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
            {...register('message')}
          />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-5">
        <h2 className="text-xl font-semibold tracking-[-1px]">주문정보</h2>
        <div className="bg-[#f6f6f6] p-4 rounded">
          <div className="flex justify-between border-b-[1px] border-[#dee0e4] py-5">
            <p>상품</p>
            <p>금액</p>
          </div>
          <div className="flex flex-col border-b-[1px] border-[#dee0e4] py-5 ">
            {items.map((item, key) => (
              <div
                className="flex flex-row justify-between"
                key={`${item.name}-${key}`}
              >
                <p className="font-semibold">
                  {item.name} X {item.count}
                </p>
                <p className="font-semibold">
                  {(item.price.number * item.count).toLocaleString()}원
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-b-[1px] border-[#dee0e4] py-5">
            <p>배송구분</p>
            <p>무료배송</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-[#dee0e4] py-5">
            <p className="font-semibold">합계</p>
            <p className="text-[#a749ff] font-semibold">
              {items
                .reduce((sum, obj) => {
                  const { count, price } = obj;

                  return sum + price.number * count;
                }, 0)
                .toLocaleString()}
              원
            </p>
          </div>
          <div className="flex py-5 justify-center text-sm -tracking-normal">
            <p>
              상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.
            </p>
          </div>
        </div>
        <Button type="submit" text="결제하기" isRounded={true} />
      </div>
    </form>
  );
};

export default Order;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getCookie('accessToken', context);

  try {
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }

    if (!context.query.item) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    const items = context.query.item as string;
    return {
      props: {
        items: JSON.parse(Buffer.from(items, 'base64').toString()),
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
