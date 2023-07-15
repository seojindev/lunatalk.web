import { NextPage } from 'next';
import Input from '../../components/auth/elements/Input';
import { useRouter } from 'next/router';
import Button from '../../components/auth/elements/Button';
import { BsSearch } from 'react-icons/bs';

const Search: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="relative w-full">
          <Input
            type="text"
            placeHolder="상품을 검색해주세요."
            className="!pr-[30px]"
          />
          <div className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer">
            <BsSearch />
          </div>
        </div>
        <div className="w-20">
          <Button type="button" text="취소" onClick={() => router.back()} />
        </div>
      </div>
    </div>
  );
};

export default Search;
