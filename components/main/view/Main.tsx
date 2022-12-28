import BestItem from './BestItem';
import Categories from './Categories';
import NewItem from './NewItem';

function Main(props: any) {
  const { categories, bestItems, newItems } = props;
  return (
    <>
      <Categories categories={categories} />
      <BestItem items={bestItems} />
      <NewItem items={newItems} />
    </>
  );
}

export default Main;
