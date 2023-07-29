import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import Button from '../../components/auth/elements/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect, useState } from 'react';

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

const Order: NextPage<OrderProps> = ({ items }: OrderProps) => {
  const CURRENT_URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);

  const onClickHandler = () => {
    open({ onComplete: handleComplete });
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
  };

  return (
    <div className="flex flex-row gap-5 tablet:flex-col h-auto">
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
            />
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
            />
            <input
              type="text"
              className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px] w-full"
              placeholder="나머지 주소"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#000] font-semibold">
            휴대폰번호
          </label>
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#000] font-semibold">
            배송메세지
          </label>
          <input
            type="text"
            className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
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
    </div>
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
