import Head from 'next/head';
import { Product } from '../../../types/api';
import { Product as CommonProduct } from '../../../types/common';
import EventProductBox from '../../main/elements/EventProductBox';
import ProductDetailImage from './ProductDetailImage';
import ProductInformation from './ProductInformation';
import ProductOrderInformation from './ProductOrderInformation';
import ProductReview from './ProductReview';
import ProductTabs from './ProductTabs';
import { NextSeo } from 'next-seo';

interface ProductProps {
  onClick: (value: string) => void;
  tabs: { value: string; name: string }[];
  selectedTab: string;
  product: Product;
  recommend: CommonProduct[];
  onHandleCount: (type: string) => void;
  onHandleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  purchaseCount: number;
  onPurchase: () => void;
  onAddCart: (uuid: string) => void;
}

function Product(props: ProductProps) {
  const {
    onClick,
    tabs,
    selectedTab,
    product,
    recommend,
    onHandleCount,
    onHandleCountChange,
    purchaseCount,
    onPurchase,
    onAddCart,
  } = props;

  return (
    product && (
      <>
        <NextSeo
          title={`루나톡 - ${product.name}`}
          description={product.name}
          canonical={`https://dev.lunatalk.co.kr`}
          openGraph={{
            type: 'website',
            site_name: '루나톡',
            title: `루나톡 - ${product.name}`,
            url: `https://dev.lunatalk.co.kr/product/${product.uuid}`,
            images: [{ url: product.image.rep[0].url, alt: product.name }],
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <div className="flex flex-col gap-8">
          <ProductInformation
            item={product}
            onHandleCount={onHandleCount}
            onHandleCountChange={onHandleCountChange}
            purchaseCount={purchaseCount}
            onPurchase={onPurchase}
            onAddCart={onAddCart}
          />
          <ProductTabs
            tabs={tabs}
            onClick={onClick}
            selectedTab={selectedTab}
          />
          {selectedTab === 'order' && <ProductOrderInformation />}
          {selectedTab === 'product' && (
            <ProductDetailImage image={product.image.detail} />
          )}
          {selectedTab === 'review' && <ProductReview />}
          {recommend && (
            <EventProductBox name={'추천 상품'} items={recommend} />
          )}
        </div>
      </>
    )
  );
}

export default Product;
