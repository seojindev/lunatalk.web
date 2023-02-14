import { useState } from 'react';

interface ProductHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function ProductHoc(props: ProductHocProps) {
  const { WrappedComponent } = props;

  const [selectedTab, setSelectTab] = useState<string>('order');

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
  };

  return <WrappedComponent {...productData} />;
}

export default ProductHoc;
