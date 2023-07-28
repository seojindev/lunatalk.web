import router from 'next/router';
import { AiFillCloseCircle } from 'react-icons/ai';
import Button from '../../auth/elements/Button';
import Input from '../../auth/elements/Input';

interface SearchHeadProps {
  onSubmit: () => void;
  register: any;
  reset: () => void;
  onCancel: () => void;
}

function SearchHead(props: SearchHeadProps) {
  const { onSubmit, register, reset, onCancel } = props;

  return (
    <div className="flex flex-row justify-between gap-2">
      <form className="flex gap-3 basis-[100%]" onSubmit={onSubmit}>
        <div className="relative w-full">
          <Input
            type="text"
            placeHolder="상품을 검색해주세요."
            className="!pr-[30px] bg-[#f4f4f4] border-none outline-none rounded-lg"
            register={register('keyword', {
              required: '상품명을 검색해주세요.',
            })}
          />
          <div
            className="absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer z-10"
            onClick={() => reset()}
          >
            <AiFillCloseCircle color="#ccc" size={24} />
          </div>
          <div className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer hidden">
            <Button type="submit" text="" />
          </div>
        </div>
      </form>
      <div className="w-20">
        <Button type="button" text="취소" isRounded={true} onClick={onCancel} />
      </div>
    </div>
  );
}

export default SearchHead;
