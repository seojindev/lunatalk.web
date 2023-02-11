import { NextPage } from 'next';
import Link from 'next/link';

const Notfound: NextPage = () => {
  return (
    <div className="text-center text-xl tablet:text-xl mobile:text-base flex flex-col gap-3 justify-center items-center pb-10">
      <h1 className="text-8xl text-[#a749ff] font-semibold -tracking-[2px]">
        404
      </h1>
      <p className="-tracking-[1.3px]">존재하지 않는 페이지 입니다.</p>
      <Link
        href="/"
        className="bg-[#a749ff] text-white p-2 text-sm rounded w-32"
      >
        메인으로 이동하기
      </Link>
    </div>
  );
};

export default Notfound;
