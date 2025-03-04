import _ from 'lodash';
import { Product } from '../../../../types/common';
import ProductItem from './ProdcutItem';

interface ProductListProps {
  items: Product[];
}

function ProductList(props: ProductListProps) {
  const { items } = props;

  return items.length ? (
    <div className="grid gap-10 grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2">
      {_.map(items, (item) => (
        <ProductItem key={item.uuid} item={item} />
      ))}
    </div>
  ) : (
    <div className="w-full">
      <h2 className="text-center tracking-[-1.5px] my-4">
        상품이 존재하지 않습니다.
      </h2>
    </div>
  );
}

export default ProductList;
