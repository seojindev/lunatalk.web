import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function queryErrorHandler(error: unknown) {
  if (error instanceof Error) {
    console.log('123123', error);

    const toastError =
      error instanceof Error
        ? error.message
        : '알수 없는 에러가 발생하였습니다. 관리자에게 문의 하세요.';
    toast.error(toastError);
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});
