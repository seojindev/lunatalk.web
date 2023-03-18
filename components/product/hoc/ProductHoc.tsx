import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import cartMutation from '../../../hooks/mutation/cart';
import useProductDataQuery from '../../../hooks/query/useProductDataQuery';
import useUser from '../../../hooks/user/useUser';

interface ProductHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function ProductHoc(props: ProductHocProps) {
  const { WrappedComponent } = props;
  const router = useRouter();
  const { isLogin } = useUser();

  const { addMutate } = cartMutation();

  const { uuid } = router.query;

  const { productData: product, recommendData: recommend } =
    useProductDataQuery(uuid as string);

  const [selectedTab, setSelectTab] = useState<string>('product');
  const [purchaseCount, setPurchaseCount] = useState<number>(1);

  const onChangeTab = (tabName: string) => {
    setSelectTab(tabName);
  };

  const tabs = [
    { value: 'order', name: '주문 정보' },
    { value: 'product', name: '상품 정보' },
    { value: 'review', name: '리뷰' },
  ];

  const onHandleCount = useCallback(
    (type: string) => {
      if (type === '+') {
        if (product?.quantity === purchaseCount) {
          toast.warning('최대 갯수를 초과 하였습니다.');
          return;
        }
        setPurchaseCount((prev) => prev + 1);
      } else {
        if (purchaseCount === 1) {
          toast.warning('1개 이상 구매가 가능합니다.');
          return;
        }
        setPurchaseCount((prev) => prev - 1);
      }
    },
    [purchaseCount],
  );

  const onHandleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPurchaseCount(+e.target.value);
    },
    [purchaseCount],
  );

  const onPurchase = () => {
    console.log(isLogin);

    if (!isLogin) {
      toast.warning('로그인이 필요한 서비스 입니다.');
      router.push('/auth/login');
    }
    // TODO:
  };

  const onAddCart = (uuid: string) => {
    if (!isLogin) {
      toast.warning('로그인이 필요한 서비스 입니다.');
      router.push('/auth/login');
    }
    addMutate(uuid);
  };

  const productData = {
    selectedTab,
    onClick: onChangeTab,
    tabs,
    product,
    recommend,
    onHandleCount,
    onHandleCountChange,
    purchaseCount,
    onPurchase,
    onAddCart,
  };

  return <WrappedComponent {...productData} />;
}

export default ProductHoc;
