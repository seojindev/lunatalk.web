import { NextSeo } from 'next-seo';
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
      <NextSeo
        title={`루나톡 - 가방, 다이어리 판매 브랜드`}
        description={'가방/다이어리 브랜드 루나톡(Lunatalk)'}
        canonical={'https://lunatalk.co.kr/'}
        openGraph={{
          url: 'https://lunatalk.co.kr/',
        }}
      />
      <Categories categories={categories} />
      <BestItem items={bestItems} />
      <NewItem items={newItems} />
      <Customer items={noticeItems} />
    </>
  );
}

export default Main;
