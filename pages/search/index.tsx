import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const SearchComponent = dynamic<any>(
  () => import('../../components/search/SearchComponent'),
);

const Search: NextPage = () => {
  return <SearchComponent />;
};

export default Search;
