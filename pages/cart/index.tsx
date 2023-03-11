import { NextPage } from 'next';
import Image from 'next/image';

const Cart: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 -tracking-[1px]">
      <div className="border-[#222] border-b-[2px] pb-2">
        <h2 className="text-2xl tracking-[-.36px]">CART LIST</h2>
      </div>
      {/* <div className="flex justify-center items-center py-10 text-base text-[#aaa] -tracking-[.36px]">
        <p>추가 하신 장바구니가 없습니다.</p>
      </div> */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center border-b-[1px] p-3">
          <div className="flex flex-row gap-10 tablet:gap-5">
            <Image
              src={
                'https://media.lunatalk.co.kr/storage/products/rep/6cfbd8f340e67cf8791d7a638b91df80f4c2ef7e/rknAeYk6ndOZU8MuyQMUg8n87zgcpVKi0gBXE4yX.jpg'
              }
              width={100}
              height={100}
              alt="image"
              className="rounded"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">제목제목제목</p>
              <p className="mb-3">컬러색</p>
              <input
                type="number"
                className="w-[30px] bg-slate-200 text-center rounded"
                value={1}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="bg-[#a749ff] p-2 text-white rounded-2xl tablet:text-sm"
            >
              구매하기
            </button>
            <button type="button" className="text-sm underline">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
