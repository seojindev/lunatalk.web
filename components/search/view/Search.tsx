import { Product } from '../../../types/common';
import SearchBody from './SearchBody';
import SearchHead from './SearchHead';

interface SearchProps {
  items: Product[];
  keyword: string;
  onCancelBtn: () => void;
  onSubmit: () => void;
  reset: () => void;
  register: any;
}

function Search(props: SearchProps) {
  const { items, keyword, onCancelBtn, onSubmit, reset, register } = props;
  return (
    <div className="flex flex-col gap-5">
      <SearchHead
        onCancel={onCancelBtn}
        onSubmit={onSubmit}
        register={register}
        reset={reset}
      />
      <SearchBody items={items} keyword={keyword} />
    </div>
  );
}

export default Search;
