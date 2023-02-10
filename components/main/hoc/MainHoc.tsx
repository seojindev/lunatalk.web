import useMainDataQuery from '../../../hooks/query/useMainDataQuery';

interface MainHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function MainHoc(props: MainHocProps) {
  const { WrappedComponent } = props;
  const { categories, bestItems, newItems, noticeItems } = useMainDataQuery();

  const mainData = {
    categories,
    bestItems,
    newItems,
    noticeItems,
  };

  return <WrappedComponent {...mainData} />;
}

export default MainHoc;
