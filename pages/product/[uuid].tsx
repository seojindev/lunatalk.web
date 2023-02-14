import { NextPage } from 'next';
import Image from 'next/image';
import Select from 'react-select';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import cn from 'classnames';

const Product: NextPage = () => {
  const [selectTab, setSelectTab] = useState<string>('order');

  const onChangeTab = (tabName: string) => {
    setSelectTab(tabName);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 tablet:grid-cols-1 gap-3">
        <div className="flex justify-center w-[400px] mx-auto tablet:w-full tablet:max-w-[400px]">
          <Image
            src="https://media.lunatalk.co.kr/storage/products/rep/6cfbd8f340e67cf8791d7a638b91df80f4c2ef7e/S9971Db7IyaVGyOMKLa39apkrHFqNias1K62GX4T.jpg"
            width={280}
            height={280}
            alt="이미지"
            className="block w-full"
          />
        </div>
        <div className="flex flex-col gap-3 flex-wrap">
          <h2 className="text-[#010101] text-2xl tablet:text-xl">title</h2>
          <div className="flex items-center gap-3">
            <span className="text-black text-2xl tablet:text-lg">17000원</span>
            <span className="text-[#8e8e8e] text-lg line-through tablet:text-base">
              24000원
            </span>
          </div>
          <div className="text-[#a749ff] text-[15px] tablet:text-sm">
            <p>1 리뷰</p>
          </div>
          <div className="tablet:text-xs">
            <Select
              id="selectBox"
              instanceId="selectbox"
              options={[{ value: 'orange', label: 'Orange' }]}
              placeholder={'색상을 선택해주세요.'}
              onChange={(e) => {
                console.log(e);
              }}
              value={{ value: 'orange', label: 'Orange' }}
              defaultValue={{ value: 'orange', label: 'Orange' }}
            />
          </div>
          <div className="border-[1px] rounded p-3 flex flex-col gap-3 tablet:text-sm">
            <div className="flex justify-between ">
              <p>오렌지</p>
              <button type="button">
                <IoClose />
              </button>
            </div>
            <div className="flex justify-between">
              <div>
                <input
                  type="text"
                  className="bg-slate-100 rounded w-10 text-center text-sm p-2"
                  value={1}
                />
              </div>
              <div className="flex gap-3 tablet:text-sm">
                <button className="border-[1px] border-slate-600 rounded  text-center text-xl px-3 justify-center items-center  tablet:text-sm">
                  +
                </button>
                <button className="border-[1px] border-slate-400 rounded  text-center text-xl px-3 tablet:text-sm">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t-[1px] pt-3 mt-3 text-[13px] tracking-tight">
            <p>총 상품 가격</p>
            <p>17450원</p>
          </div>
          <div className="grid grid-cols-2 gap-3 tablet:text-sm">
            <button className="bg-[#a749ff] text-white py-3 tablet:py-2">
              구매하기
            </button>
            <button className="bg-[#a749ff] text-white py-3 tablet:py-2">
              장바구니
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 px-40 text-center border-b-[1px] border-[#d7d7d7] text-xl font-semibold tracking-[-1.3px] tablet:px-20 tablet:text-base tablet:gap-4 mobile:px-10 mobile:text-sm">
          <button
            onClick={() => onChangeTab('order')}
            className={cn('py-2 block text-[#666] tablet:py-1', {
              'text-black border-b-2 border-black': selectTab === 'order',
            })}
          >
            상품 정보
          </button>
          <button
            onClick={() => onChangeTab('product')}
            className={cn('py-2 block text-[#666] tablet:py-1', {
              'text-black border-b-2 border-black': selectTab === 'product',
            })}
          >
            주문 정보
          </button>
          <button
            onClick={() => onChangeTab('review')}
            className={cn('py-2 block text-[#666] tablet:py-1', {
              'text-black border-b-2 border-black': selectTab === 'review',
            })}
          >
            리뷰
          </button>
        </div>
        {selectTab === 'order' && (
          <div className="text-base tracking-[-1px] tablet:text-sm">
            <p>
              <strong>제조국</strong> : 한국 / <strong>제조사</strong> :
              (주)서진산업 루나톡
            </p>
            <p>
              <strong>취급 주의사항 : </strong>
              <span>
                물과 상처에 주의하세요. 때가 탔을경우 가벽게 부드러운 수건으로
                닦아주세요.
              </span>
            </p>
            <p>
              <strong>품질보증기준 : </strong>
              <span>
                관련법 및 소비자분쟁해결 규정에 따르며 제품구입후 7일이내로
                제품의 손상,훼손,변형 이 없는경우 교환 또는 환불이 가능하며
                일주일 이내 사용중 정상상태에서 발생한 성능,기능상 하자 발생시
                무상교환 또는 환급이 가능합니다.
              </span>
            </p>
            <p>
              <strong>A/S 책임자와 전화번호 : </strong>
              <span>루나톡 고객센터 032-684-1565</span>
            </p>
          </div>
        )}
        {selectTab === 'product' && (
          <div className="px-2 w-full">
            <Image
              src="https://media.lunatalk.co.kr/storage/products/detail/6cfbd8f340e67cf8791d7a638b91df80f4c2ef7e/4CdbQmT6yekK9MMB9JbTmkrwbD8dxuKTLAHaa1P9.jpg"
              alt="상품"
              width={1170}
              height={30000}
            />
          </div>
        )}
        {selectTab === 'review' && (
          <div className="text-center text-2xl font-semibold tracking-[-1px]">
            <h2>리뷰가 존재하지 않습니다.</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Product;
