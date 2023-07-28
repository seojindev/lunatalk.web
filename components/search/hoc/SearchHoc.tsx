import { useRouter } from 'next/router';
import useSearch from '../../../hooks/product/useSearch';
import useProductSearchQuery from '../../../hooks/query/useProductSearchQuery';
import { useEffect } from 'react';

interface SearchHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function SearchHoc(props: SearchHocProps) {
  const { WrappedComponent } = props;
  const router = useRouter();

  const keyword = router.query.q as string;

  const { onSubmit, register, setValue, reset, onCancel } = useSearch();
  const { productData } = useProductSearchQuery(keyword);

  useEffect(() => {
    if (!keyword) return;
    setValue('keyword', Buffer.from(keyword, 'base64').toString());
  }, [keyword]);

  const searchData = {
    onCancel,
    onSubmit,
    register,
    setValue,
    reset,
    onCancelBtn: onCancel,
    items: productData,
    keyword,
  };

  return <WrappedComponent {...searchData} />;
}

export default SearchHoc;
