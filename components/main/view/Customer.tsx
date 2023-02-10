import _ from 'lodash';
import Link from 'next/link';
import { Notice } from '../../../types/api';

interface CustomerProps {
  items: Notice[];
}

function Customer(props: CustomerProps) {
  const { items } = props;

  return (
    <div className="flex justify-between gap-5 py-[50px]">
      <div className="w-[50%]">
        <h3 className="text-2xl border-b-[2px] pb-2 border-[#222] mb-5 -tracking-[1.2px]">
          CUSTOMER CENTER
        </h3>
        <p className="text-3xl font-normal mb-[14px]">032-684-1565</p>
        <strong className="text-sm">운영시간</strong>
        <p className="text-sm font-medium text-[#333]">
          평일 오전 09:00 ~ 오후 06:00
          <br />
          점심시간 오후 01:00 ~ 오후 02:00
          <br />토 / 일 / 공휴일 휴무
        </p>
      </div>
      <div className="w-[50%]">
        <h3 className="text-2xl border-b-[2px] pb-2 border-[#222] mb-5 -tracking-[1.2px]">
          NOTICE
        </h3>
        {_.map(items, (item) => (
          <Link
            href={`/notice/${item.uuid}`}
            key={item.uuid}
            className="flex justify-between -tracking-[1.2px]"
          >
            <p>
              <strong className="mr-2">[{item.category.code_name}]</strong>
              {item.title}
            </p>
            <p>{item.created_at}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Customer;
