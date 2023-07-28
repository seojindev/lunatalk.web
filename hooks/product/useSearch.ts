import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'throttle-debounce';
import { queryClient } from '../../lib/query/queryClient';
import { queryKeys } from '../../lib/query/queryKeys';

export default function useSearch() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ defaultValues: { keyword: '' } });

  const onSearch = useCallback(
    (search: string) => {
      queryClient.invalidateQueries([queryKeys.search]);
      router.push({
        pathname: 'search',
        query: { q: Buffer.from(search).toString('base64') },
      });
    },
    [router],
  );

  const debouncedSearch = useMemo(() => {
    return debounce(300, ({ keyword }: { keyword: string }) => {
      onSearch(keyword);
    });
  }, [onSearch]);

  const onCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
    debouncedSearch,
    onSubmit: handleSubmit(debouncedSearch),
    register,
    errors,
    reset,
    setValue,
    onCancel,
  };
}
