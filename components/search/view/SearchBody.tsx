import { Product } from '../../../types/common';
import ProductList from '../../common/elements/product/ProductList';

interface SearchBodyProps {
  items?: Product[];
  keyword: string;
}

function SearchBody({ items, keyword }: SearchBodyProps) {
  if (!keyword) return <></>;
  return items && items.length ? (
    <div className="flex flex-col gap-10">
      <p className="-tracking-[0.5px] font-light">
        상품 {items.length.toLocaleString()}
      </p>
      <ProductList items={items} />
    </div>
  ) : (
    <>
      <h2 className="text-lg -tracking-[1px] text-center py-10 font-light">
        검색된 상품이 존재하지 않습니다.
      </h2>
    </>
  );
}

export default SearchBody;
