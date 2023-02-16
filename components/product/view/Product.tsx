import { Product } from '../../../types/api';
import ProductDetailImage from './ProductDetailImage';
import ProductInformation from './ProductInformation';
import ProductOrderInformation from './ProductOrderInformation';
import ProductReview from './ProductReview';
import ProductTabs from './ProductTabs';

interface ProductProps {
  onClick: (value: string) => void;
  tabs: { value: string; name: string }[];
  selectedTab: string;
  product: Product;
}

function Product(props: ProductProps) {
  const { onClick, tabs, selectedTab, product } = props;
  console.log(product);
  return (
    <div className="flex flex-col gap-8">
      <ProductInformation item={product} />
      <ProductTabs tabs={tabs} onClick={onClick} selectedTab={selectedTab} />
      {selectedTab === 'order' && <ProductOrderInformation />}
      {selectedTab === 'product' && (
        <ProductDetailImage image={product.image.detail} />
      )}
      {selectedTab === 'review' && <ProductReview />}
    </div>
  );
}

export default Product;
