import { Product } from '../../../types/api';
import { Product as CommonProduct } from '../../../types/common';
import EventProductBox from '../../main/elements/EventProductBox';
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
  recommend: CommonProduct[];
}

function Product(props: ProductProps) {
  const { onClick, tabs, selectedTab, product, recommend } = props;

  return (
    product && (
      <div className="flex flex-col gap-8">
        <ProductInformation item={product} />
        <ProductTabs tabs={tabs} onClick={onClick} selectedTab={selectedTab} />
        {selectedTab === 'order' && <ProductOrderInformation />}
        {selectedTab === 'product' && (
          <ProductDetailImage image={product.image.detail} />
        )}
        {selectedTab === 'review' && <ProductReview />}
        {recommend && <EventProductBox name={'추천 상품'} items={recommend} />}
      </div>
    )
  );
}

export default Product;
