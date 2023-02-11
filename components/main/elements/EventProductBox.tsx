import { ProductList as ProductListType } from '../../../types/common';
import ProductList from '../../common/elements/product/ProductList';

type EventProductBoxProps = ProductListType;

function EventProductBox(props: EventProductBoxProps) {
  const { name, items } = props;
  return (
    <div className="mb-14 tablet:mb-10">
      <div className="mb-14 text-center text-[30px] font-semibold tablet:text-[20px] tablet:mb-5">
        <h2>{name}</h2>
      </div>
      <ProductList items={items} />
    </div>
  );
}

export default EventProductBox;
