import BestItem from '../BestItem';
import Categories from '../Categories';
import NewItem from '../NewItem';

function Main(props: any) {
  const { categories } = props;
  return (
    <>
      <Categories categories={categories} />
      <BestItem />
      <NewItem />
    </>
  );
}

export default Main;
