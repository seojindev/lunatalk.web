import ProductDetailImage from './ProductDetailImage';
import ProductInformation from './ProductInformation';
import ProductOrderInformation from './ProductOrderInformation';
import ProductReview from './ProductReview';
import ProductTabs from './ProductTabs';

interface ProductProps {
  onClick: (value: string) => void;
  tabs: { value: string; name: string }[];
  selectedTab: string;
}

function Product(props: ProductProps) {
  const { onClick, tabs, selectedTab } = props;
  return (
    <div className="flex flex-col gap-8">
      <ProductInformation />
      <ProductTabs tabs={tabs} onClick={onClick} selectedTab={selectedTab} />
      {selectedTab === 'order' && <ProductOrderInformation />}
      {selectedTab === 'product' && (
        <ProductDetailImage image="https://media.lunatalk.co.kr/storage/products/detail/6cfbd8f340e67cf8791d7a638b91df80f4c2ef7e/4CdbQmT6yekK9MMB9JbTmkrwbD8dxuKTLAHaa1P9.jpg" />
      )}
      {selectedTab === 'review' && <ProductReview />}
    </div>
  );
}

export default Product;
