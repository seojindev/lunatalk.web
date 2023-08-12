import _ from 'lodash';
import { OrderProduct } from '../../../types/api';
import Image from 'next/image';

interface Props {
  order: OrderProduct[];
  title: string;
}
function MyOrderContext({ title, order }: Props) {
  return (
    <div>
      <div className="flex flex-grow py-3">
        <p className="w-full text-center border-[1px] border-[#f3f3f3] py-3 bg-[#f5f5f5] text-sm">
          {title}
        </p>
      </div>
      <div className="flex flex-col">
        {_.map(order, (item, index) => (
          <div
            key={item.uuid + index}
            className="flex justify-between flex-grow text-sm items-center gap-2 border-b-[1px] py-5 tablet:flex-col tablet:items-center tablet:justify-center"
          >
            <Image
              src={item.rep_image.url}
              width={96}
              height={96}
              alt={item.uuid}
            />
            <p className="min-w-[200px] text-center">{item.order_name}</p>
            <p className="min-w-[200px] text-center">{item.created_at.type1}</p>
            <p className="min-w-[200px] text-center">{item.uuid}</p>
            <p className="min-w-[200px] text-center">
              {item.order_price.string}원
            </p>
            <p className="min-w-[200px] text-center">{item.state.code_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrderContext;
