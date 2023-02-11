import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCategoryListByOption } from '../../../lib/api/category';
import { queryKeys } from '../../../lib/query/queryKeys';
import { Product } from '../../../types/common';
import { ProductItem } from '../../common/elements';
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
    <div className="flex flex-row flex-wrap gap-5">
      <CategorySelect
        options={options}
        onChange={optionOnChange}
        selectedOption={selectedOption}
      />
      <ProductList items={items} />
    </div>
  );
}

export default Category;
