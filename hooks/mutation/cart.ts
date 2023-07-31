import { queryClient } from './../../lib/query/queryClient';
import { queryKeys } from './../../lib/query/queryKeys';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { addCart, deleteCart } from '../../lib/api/cart';
import useUser from '../user/useUser';
function cartMutation() {
  const { accessToken } = useUser();
  const { mutate: deleteMutate } = useMutation(
    (cartId: number) => deleteCart(accessToken, cartId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.user, queryKeys.cart]);
        toast.success('선택한 상품이 장바구니에서 제거 되었습니다.');
      },
    },
  );

  const { mutate: addMutate } = useMutation(
    (productUuid: string) => addCart(accessToken, productUuid),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([queryKeys.cart]);
        toast.success(data);
      },
      onError: (err: Error) => {
        console.error(err);
        toast.warning(err.message || '잠시후 다시 이용해주세요.');
      },
    },
  );

  return { addMutate, deleteMutate };
}

export default cartMutation;
