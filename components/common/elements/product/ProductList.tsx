import _ from 'lodash';
import { Product } from '../../../../types/common';
import ProductItem from './ProdcutItem';

interface ProductListProps {
  items: Product[];
}

function ProductList(props: ProductListProps) {
  const { items } = props;

  return (
    <div className="grid gap-10 grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2">
      {_.map(items, (item) => (
        <ProductItem key={item.uuid} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
