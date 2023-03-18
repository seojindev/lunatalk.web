import Image from 'next/image';
import { Cart } from '../../../types/api';

interface CartItemProps {
  item: Cart;
  onDelete: (cartId: number) => void;
}
function CartItem(props: CartItemProps) {
  const { item, onDelete } = props;
  return (
    <div className="flex flex-row justify-between items-center border-b-[1px] p-3">
      <div className="flex flex-row gap-10 tablet:gap-5">
        <Image
          src={item.rep_image.url}
          width={100}
          height={100}
          alt="image"
          className="rounded aspect-[1/1] object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{item.name}</p>
          <p className="mb-3">{item.color[0].name}</p>
          {/* <input
            type="number"
            className="w-[30px] bg-slate-200 text-center rounded"
            value={1}
          /> */}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="bg-[#a749ff] p-2 text-white rounded-2xl tablet:text-sm"
        >
          구매하기
        </button>
        <button
          type="button"
          className="text-sm underline"
          onClick={() => onDelete(item.cart_id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;
