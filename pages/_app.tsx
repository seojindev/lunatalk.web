import '../styles/globals.css';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import Layout from '../components/common/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient as CustormQueryClient } from '../lib/query/queryClient';

function MyApp({ Component, pageProps }: any) {
  const [queryClient] = useState(() => CustormQueryClient);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
