import CartHoc from './hoc/CartHoc';
import Cart from './view/Cart';

function CartComponent() {
  return <CartHoc WrappedComponent={Cart} />;
}

export default CartComponent;
