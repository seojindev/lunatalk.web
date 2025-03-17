import { Product } from '../../../types/common';
import EventProductBox from '../elements/EventProductBox';

interface NewItemProps {
  items: Product[];
}

function NewItem(props: NewItemProps) {
  const { items } = props;
  return <EventProductBox name={'NEW ITEM'} items={items} />;
}

export default NewItem;
