import { ProductList } from '../../../types/common';
import { ProductItem } from '../../common/elements';

type EventProductBoxProps = ProductList;

function EventProductBox(props: EventProductBoxProps) {
  const { name, items } = props;
  return (
    <div className="mb-14">
      <div className="pb-14 text-center text-[30px] font-semibold">
        <h2>{name}</h2>
      </div>
      <div className="flex gap-10">
        {items.map((item) => (
          <ProductItem key={item.uuid} item={item} />
        ))}
      </div>
    </div>
  );
}

export default EventProductBox;
