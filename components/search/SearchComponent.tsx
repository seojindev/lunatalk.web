import SearchHoc from './hoc/SearchHoc';
import Search from './view/Search';

function SearchComponent() {
  return <SearchHoc WrappedComponent={Search} />;
}

export default SearchComponent;
