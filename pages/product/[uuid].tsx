import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ProductComponent = dynamic<any>(
  () => import('../../components/product/ProductComponent'),
);

const Product: NextPage = () => {
  return <ProductComponent />;
};
export default Product;
