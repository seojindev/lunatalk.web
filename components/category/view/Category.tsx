import { NextSeo } from 'next-seo';
import { Categories, Product } from '../../../types/common';
import ProductList from '../../common/elements/product/ProductList';
import CategorySelect from './CategorySelect';

interface CategoryProps {
  options: { value: string; label: string }[];
  items: Product[] | [];
  optionOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
  category?: Categories;
}

function Category(props: CategoryProps) {
  const { options, items, optionOnChange, selectedOption, category } = props;

  return (
    <>
      <NextSeo
        title={`루나톡 - ${category?.name}`}
        description={category?.name}
        openGraph={{
          type: 'website',
          site_name: '루나톡',
          title: `루나톡 - ${category?.name}`,
          url: `https://dev.lunatalk.co.kr/category/${category?.uuid}`,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
