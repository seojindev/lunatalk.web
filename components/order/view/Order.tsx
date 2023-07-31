import { OrderItems } from '../hoc/OrderHoc';
import DeliveryInformation from './DeliveryInfomation';
import OrderInformation from './OrderInformation';

interface Props {
  onSubmit: () => void;
  handleSubmit: any;
  register: any;
  errors: any;
  postcodeHandler: () => void;
  items: OrderItems[];
}

function Order(props: Props) {
  const { onSubmit, register, errors, postcodeHandler, items, handleSubmit } =
    props;
  return (
    <form
      className="flex flex-row gap-5 tablet:flex-col h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <DeliveryInformation
        register={register}
        errors={errors}
        postcodeHandler={postcodeHandler}
      />
      <OrderInformation items={items} />
    </form>
  );
}

export default Order;
