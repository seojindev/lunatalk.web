import { NextPage } from 'next';
import Input from '../../components/auth/elements/Input';
import { useRouter } from 'next/router';
import Button from '../../components/auth/elements/Button';
import useSearch from '../../hooks/product/useSearch';
import useProductSearchQuery from '../../hooks/query/useProductSearchQuery';
import { AiFillCloseCircle } from 'react-icons/ai';
import SearchBody from '../../components/search/view/SearchBody';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const SearchComponent = dynamic<any>(
  () => import('../../components/search/SearchComponent'),
);

const Search: NextPage = () => {
  return <SearchComponent />;
};

export default Search;
