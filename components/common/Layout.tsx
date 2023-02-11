import useInitDataQuery from '../../hooks/query/useInitDataQuery';

import { Footer, Header } from './elements';

import Spinner from './Spinner';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  const { data: initState } = useInitDataQuery();
  return (
    <div>
      <Header initState={initState} />
      <div className="max-w-[1200px] py-16 mx-auto tablet:p-2">
        <Spinner />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
