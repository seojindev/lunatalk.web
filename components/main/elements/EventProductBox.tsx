import { ProductList } from '../../../types/common';
import { ProductItem } from '../../common/elements';

type EventProductBoxProps = ProductList;

function EventProductBox(props: EventProductBoxProps) {
  const { name, items } = props;
  return (
    <div className="mb-14 tablet:mb-10">
      <div className="mb-14 text-center text-[30px] font-semibold tablet:text-[20px] tablet:mb-5">
        <h2>{name}</h2>
      </div>
      <div className="grid gap-10 grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2">
        {items.map((item) => (
          <ProductItem key={item.uuid} item={item} />
        ))}
      </div>
    </div>
  );
}

export default EventProductBox;
