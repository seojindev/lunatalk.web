import useOrder from '../../../hooks/order/useOrder';

export interface OrderItems {
  uuid: string;
  name: string;
  price: {
    number: number;
    string: string;
  };
  count: number;
}

interface OrderHocProps {
  WrappedComponent: React.ComponentType<any>;
  items: OrderItems[];
}

function OrderHoc(props: OrderHocProps) {
  const { WrappedComponent, items } = props;

  const { register, handleSubmit, onSubmit, errors, postcodeHandler } =
    useOrder({ items });

  const orderData = {
    items,
    register,
    handleSubmit,
    onSubmit,
    errors,
    postcodeHandler,
  };

  return <WrappedComponent {...orderData} />;
}

export default OrderHoc;
