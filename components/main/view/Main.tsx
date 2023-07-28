import Head from 'next/head';
import { MainData } from '../../../hooks/query/useMainDataQuery';
import BestItem from './BestItem';
import Categories from './Categories';
import Customer from './Customer';
import NewItem from './NewItem';

type MainProps = MainData;

function Main(props: MainProps) {
  const { categories, bestItems, newItems, noticeItems } = props;
  return (
    <>
      <Categories categories={categories} />
      <BestItem items={bestItems} />
      <NewItem items={newItems} />
      <Customer items={noticeItems} />
    </>
  );
}

export default Main;
