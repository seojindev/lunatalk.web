import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'throttle-debounce';

export default function useSearch() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ defaultValues: { keyword: '' } });

  const onSearch = useCallback(
    (search: string) => {
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

  const onKeyPress = (e: React.KeyboardEvent) => {
    const values = getValues();
    if (e.key === 'Enter') {
      onSearch(values.keyword);
    }
  };

  return {
    debouncedSearch,
    onKeyPress,
    onSubmit: handleSubmit(debouncedSearch),
    register,
    errors,
    reset,
  };
}
