import OrderHoc, { OrderItems } from './hoc/OrderHoc';
import Order from './view/Order';

interface Props {
  items: OrderItems[];
}

function OrderComponent({ items }: Props) {
  return <OrderHoc WrappedComponent={Order} items={items} />;
}

export default OrderComponent;
