import Image from 'next/image';
import { Product } from '../../../types/api';

interface ProductInformationProps {
  item: Product;
  onHandleCount: (type: string) => void;
  onHandleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  purchaseCount: number;
  onPurchase: () => void;
  onAddCart: (uuid: string) => void;
}

function ProductInformation(props: ProductInformationProps) {
  const {
    item,
    onHandleCount,
    onHandleCountChange,
    purchaseCount,
    onPurchase,
    onAddCart,
  } = props;
  const colors = item.options.color;

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-1 gap-3">
      <div className="flex justify-center w-[400px] mx-auto tablet:w-full tablet:max-w-[400px]">
        <Image
          src={item.image.rep[0].url}
          width={280}
          height={280}
          alt="이미지"
          className="block w-full"
        />
      </div>
      <div className="flex flex-col gap-3 flex-wrap">
        <h2 className="text-[#010101] text-2xl tablet:text-xl">{item.name}</h2>
        <div className="flex items-center gap-3">
          <span className="text-black text-2xl tablet:text-lg">
            {item.price.string}원
          </span>
          <span className="text-[#8e8e8e] text-lg line-through tablet:text-base">
            {item.original_price.string}원
          </span>
        </div>
        <div className="text-[#a749ff] text-[15px] tablet:text-sm">
          <p>{item.reviews.length} 리뷰</p>
        </div>
        {/* <div className="tablet:text-xs">
          <Select
            id="selectBox"
            instanceId="selectbox"
            options={optionList}
            placeholder={'색상을 선택해주세요.'}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div> */}
        <div className="border-[1px] rounded p-3 flex flex-col gap-3 tablet:text-sm">
          <div className="flex justify-between ">
            <p>{colors[0].name}</p>
            {/* <button type="button">
              <IoClose />
            </button> */}
          </div>
          <div className="flex justify-between">
            <div className="w-[40px] h-[40px]">
              <input
                type="number"
                className="bg-slate-100 rounded text-center text-sm block w-full h-full"
                value={purchaseCount}
                onChange={onHandleCountChange}
              />
            </div>
            <div className="flex gap-3 tablet:text-sm">
              <button
                onClick={() => onHandleCount('+')}
                className="border-[1px] border-slate-600 rounded  text-center text-xl px-3 justify-center items-center  tablet:text-sm"
              >
                +
              </button>
              <button
                onClick={() => onHandleCount('-')}
                className="border-[1px] border-slate-400 rounded  text-center text-xl px-3 tablet:text-sm disabled:bg-slate-100 disabled:border-none"
                disabled={purchaseCount <= 1}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] pt-3 mt-3 text-[13px] tracking-tight">
          <p>총 상품 가격</p>
          <p>{(item.price.number * purchaseCount).toLocaleString()}원</p>
        </div>
        <div className="grid grid-cols-2 gap-3 tablet:text-sm">
          <div className="">
            <button
              type="button"
              onClick={onPurchase}
              className="bg-[#a749ff] text-white py-3 tablet:py-2 block w-full"
            >
              구매하기
            </button>
          </div>
          <div>
            <button
              onClick={() => onAddCart(item.uuid)}
              type="button"
              className="bg-[#a749ff] text-white py-3 tablet:py-2 block w-full"
            >
              장바구니
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
