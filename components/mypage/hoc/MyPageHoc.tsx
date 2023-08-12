import useMyPageQuery from '../../../hooks/query/useMyPageQuery';
import { OrderProduct } from '../../../types/api';

export interface MyPageData {
  name: string;
  countByType: {
    priceBefore: number;
    deliveryBefore: number;
    deliveryIng: number;
    deliveryEnd: number;
  };
  order: OrderProduct[];
  cancelOrder: OrderProduct[];
}
interface MyPageHocProps {
  WrappedComponent: React.ComponentType<MyPageData>;
}

function MyPageHoc(props: MyPageHocProps) {
  const { WrappedComponent } = props;
  const { myPageData: data } = useMyPageQuery();

  const myPageData = {
    name: data?.user_info.name || '',
    countByType: {
      priceBefore: Number(data?.order_state.price_before) || 0,
      deliveryBefore: Number(data?.order_state.delivery_brfore) || 0,
      deliveryIng: Number(data?.order_state.delivery_ing) || 0,
      deliveryEnd: Number(data?.order_state.delivery_end) || 0,
    },
    order: data?.list.order || [],
    cancelOrder: data?.list.cancel || [],
  };

  return <WrappedComponent {...myPageData} />;
}

export default MyPageHoc;
