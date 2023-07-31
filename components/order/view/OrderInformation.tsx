import Button from '../../auth/elements/Button';

interface Props {
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

function OrderInformation(props: Props) {
  const { items } = props;
  return (
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
  );
}

export default OrderInformation;
