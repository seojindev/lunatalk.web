import useMainDataQuery from '../../../hooks/query/useMainDataQuery';
import _ from 'lodash';

interface MainHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function MainHoc(props: MainHocProps) {
  const { WrappedComponent } = props;
  const { categories, bestItems, newItems, noticeItems } = useMainDataQuery();

  const mainData = {
    categories,
    bestItems: _.map(bestItems, (item) => item.product),
    newItems: _.map(newItems, (item) => item.product),
    noticeItems,
  };

  return <WrappedComponent {...mainData} />;
}

export default MainHoc;
