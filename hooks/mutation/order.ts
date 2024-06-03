import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useUser from '../user/useUser';
import { OrderForm } from '../order/useOrder';
import { setOrder } from '../../lib/api/order';
import _ from 'lodash';

function orderMutation() {
  const { accessToken } = useUser();
  const { mutate: setOrderMutate } = useMutation(
    (data: OrderForm) => setOrder(data, accessToken),
    {
      onSuccess: (response: any) => {
        if (response && _.has(response, 'pay_url')) {
          const popup = window.open(
            undefined,
            '_blank',
            'width=800, height=800',
          );
          if (popup) {
            popup.location.href = response.pay_url;
          }
          return;
        }
        return toast.warning('잠시후 다시 이용해주세요.');
      },
    },
  );

  return { setOrderMutate };
}

export default orderMutation;
