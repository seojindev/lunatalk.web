import { useCallback } from 'react';
import cartMutation from '../../../hooks/mutation/cart';
import useCartQuery from '../../../hooks/query/useCartQuery';

interface CartHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function CartHoc(props: CartHocProps) {
  const { WrappedComponent } = props;
  const { list } = useCartQuery();
  const { deleteMutate } = cartMutation();

  const onDelete = useCallback(
    (cartId: number) => {
      deleteMutate(cartId);
    },
    [deleteMutate],
  );

  const cartData = { list, onDelete };

  return <WrappedComponent {...cartData} />;
}

export default CartHoc;
