import { useRecoilValue } from 'recoil';
import { categoryOptionsState } from './../../states/initData';
import { queryKeys } from './../../lib/query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCategoryListByOption } from '../../lib/api/category';
import useUser from '../user/useUser';
function useCategoryDataQuery() {
  const router = useRouter();
  const options = useRecoilValue(categoryOptionsState);
  const { uuid } = router.query;
  const categoryId: any = uuid;

  const { accessToken } = useUser();

  const [selectedOption, setSelectedOption] = useState('6000010');

  const { data } = useQuery({
    queryKey: [queryKeys.category, uuid, selectedOption],
    queryFn: () =>
      getCategoryListByOption(categoryId, selectedOption, accessToken),
    enabled: !!uuid && !!selectedOption,
  });

  const optionOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return { optionOnChange, data, options, selectedOption };
}

export default useCategoryDataQuery;
