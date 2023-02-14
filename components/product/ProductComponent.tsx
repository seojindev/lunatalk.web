import ProductHoc from './hoc/ProductHoc';
import Product from './view/Product';

function ProductComponent() {
  return <ProductHoc WrappedComponent={Product} />;
}

export default ProductComponent;
