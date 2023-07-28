import { NextPage } from 'next';
import Input from '../../components/auth/elements/Input';
import { useRouter } from 'next/router';
import Button from '../../components/auth/elements/Button';
import useSearch from '../../hooks/product/useSearch';
import useProductSearchQuery from '../../hooks/query/useProductSearchQuery';

const Search: NextPage = () => {
  const { register, onSubmit } = useSearch();
  const router = useRouter();

  const keyword = router.query.q as string;

  const { productData } = useProductSearchQuery(keyword);

  console.log(`123`, router.query);
  return (
    <div className="flex flex-col gap-3">
      <form className="flex gap-3" onSubmit={onSubmit}>
        <div className="relative w-full">
          <Input
            type="text"
            placeHolder="상품을 검색해주세요."
            className="!pr-[30px]"
            register={register('keyword', {
              required: '상품명을 검색해주세요.',
            })}
          />
          <div className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer">
            <Button type="submit" text="검색" />
          </div>
        </div>
      </form>
      <div className="w-20">
        <Button type="button" text="취소" onClick={() => router.back()} />
      </div>
    </div>
  );
};

export default Search;
