import { useRouter } from 'next/router';
import { useState } from 'react';
import useProductDataQuery from '../../../hooks/query/useProductDataQuery';

interface ProductHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function ProductHoc(props: ProductHocProps) {
  const { WrappedComponent } = props;
  const router = useRouter();

  const { uuid } = router.query;

  const { data: product } = useProductDataQuery(uuid as string);

  const [selectedTab, setSelectTab] = useState<string>('product');

  const onChangeTab = (tabName: string) => {
    setSelectTab(tabName);
  };

  const tabs = [
    { value: 'order', name: '주문 정보' },
    { value: 'product', name: '상품 정보' },
    { value: 'review', name: '리뷰' },
  ];

  const productData = {
    selectedTab,
    onClick: onChangeTab,
    tabs,
    product,
  };

  return <WrappedComponent {...productData} />;
}

export default ProductHoc;
