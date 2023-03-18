import _ from 'lodash';
import { Cart } from '../../../types/api';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';

interface CartProps {
  list: Cart[];
  onDelete: (cartId: number) => void;
}

function Cart(props: CartProps) {
  const { list, onDelete } = props;
  return (
    <div className="flex flex-col gap-3 -tracking-[1px]">
      <div className="border-[#222] border-b-[2px] pb-2">
        <h2 className="text-2xl tracking-[-.36px]">CART LIST</h2>
      </div>
      {list && list.length ? (
        <div className="flex flex-col">
          {_.map(list, (item) => (
            <CartItem item={item} onDelete={onDelete} key={item.cart_id} />
          ))}
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
