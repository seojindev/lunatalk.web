interface Props {
  priceBefore: number;
  deliveryBefore: number;
  deliveryIng: number;
  deliveryEnd: number;
}

function MyOrderTypeCount({
  priceBefore = 0,
  deliveryBefore = 0,
  deliveryIng = 0,
  deliveryEnd = 0,
}: Props) {
  return (
    <div className="flex py-4 flex-col gap-5">
      <div className="bg-[#f5f5f5] flex w-full py-4 justify-center rounded">
        <p className="text-sm text-[#666] font-semibold">나의 주문 현황</p>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-grow items-center justify-center flex-col gap-3">
          <p className="text-[#666] font-semibold text-sm -tracking-normal">
            입금전
          </p>
          <p className="text-[#a749ff] text-sm">{priceBefore}</p>
        </div>
        <div className="flex flex-grow items-center justify-center flex-col gap-3">
          <p className="text-[#666] font-semibold text-sm -tracking-normal">
            배송 준비중
          </p>
          <p className="text-[#a749ff] text-sm">{deliveryBefore}</p>
        </div>
        <div className="flex flex-grow items-center justify-center flex-col gap-3">
          <p className="text-[#666] font-semibold text-sm -tracking-normal">
            배송중
          </p>
          <p className="text-[#a749ff] text-sm">{deliveryIng}</p>
        </div>
        <div className="flex flex-grow items-center justify-center flex-col gap-3">
          <p className="text-[#666] font-semibold text-sm -tracking-normal">
            배송완료
          </p>
          <p className="text-[#a749ff] text-sm">{deliveryEnd}</p>
        </div>
      </div>
    </div>
  );
}

export default MyOrderTypeCount;
