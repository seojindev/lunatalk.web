import { MyPageData } from '../hoc/MyPageHoc';
import MyOrderContext from './MyOrderContext';
import MyOrderTypeCount from './MyOrderTypeCount';
import MyTop from './MyTop';

type Props = MyPageData;

function Mypage(props: Props) {
  const { name, countByType, order, cancelOrder } = props;

  return (
    <div className="flex flex-col gap-5">
      <MyTop name={name} />
      <MyOrderTypeCount {...countByType} />
      <MyOrderContext title="주문 내역 조회" order={order} />
      <MyOrderContext title="취소 내역 조회" order={cancelOrder} />
    </div>
  );
}

export default Mypage;
