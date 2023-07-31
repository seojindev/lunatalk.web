import { useForm } from 'react-hook-form';
import useOrderMyInformation from '../query/useOrderMyInformation';
import usePostCode from './usePostCode';
import { useEffect } from 'react';
import orderMutation from '../mutation/order';
import _ from 'lodash';
import { OrderItems } from '../../components/order/hoc/OrderHoc';

export interface OrderForm {
  name: string;
  zipcode: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
  message: string;
  product: string[];
}

interface Props {
  items: OrderItems[];
}

function useOrder({ items }: Props) {
  const { orderInformation } = useOrderMyInformation();
  const { onClickHandler: postcodeHandler } = usePostCode(orderInformation);
  const { setOrderMutate } = orderMutation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      zipcode: '',
      address1: '',
      address2: '',
      phone: '',
      email: '',
      message: '안전하게 배송해주세요.',
      product: [],
    },
  });

  useEffect(() => {
    if (!items.length) return;

    _.forEach(items, (item) => {
      const products = _.times(item.count, _.constant(item.uuid));
      setValue('product', products);
    });
  }, [items]);

  useEffect(() => {
    if (!orderInformation) return;
    setValue('name', orderInformation.name);
    setValue('zipcode', orderInformation.address.zipcode);
    setValue('address1', orderInformation.address.step1 || '');
    setValue('address2', orderInformation.address.step2 || '');
    setValue(
      'phone',
      `${orderInformation.phone_number.step1}${orderInformation.phone_number.step2}${orderInformation.phone_number.step3}`,
    );
    setValue('email', orderInformation.email.full_email);
  }, [orderInformation]);

  return {
    register,
    handleSubmit,
    onSubmit: setOrderMutate,
    errors,
    postcodeHandler,
  };
}

export default useOrder;
