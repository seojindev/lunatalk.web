import { Product } from '../../../types/common';
import EventProductBox from '../elements/EventProductBox';

interface BestItemProps {
  items: Product[];
}

function BestItem(props: BestItemProps) {
  const { items } = props;
  return <EventProductBox name={'BEST ITEM'} items={[]} />;
}

export default BestItem;
