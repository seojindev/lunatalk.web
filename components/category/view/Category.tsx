import Head from 'next/head';
import { Product } from '../../../types/common';
import ProductList from '../../common/elements/product/ProductList';
import CategorySelect from './CategorySelect';

interface CategoryProps {
  options: { value: string; label: string }[];
  items: Product[] | [];
  optionOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
}

function Category(props: CategoryProps) {
  const { options, items, optionOnChange, selectedOption } = props;

  return (
    <>
      <Head>
        <title>루나톡 - 가방,다이어리 판매 브랜드</title>
      </Head>
      <div className="flex flex-col flex-wrap gap-5">
        <CategorySelect
          options={options}
          onChange={optionOnChange}
          selectedOption={selectedOption}
        />
        <ProductList items={items} />
      </div>
    </>
  );
}

export default Category;
