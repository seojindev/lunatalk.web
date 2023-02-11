import Image from 'next/image';
import Link from 'next/link';
import { BsBag, BsFillPersonFill, BsSearch } from 'react-icons/bs';
import { AppBase } from '../../../../types/common';

interface Props {
  initState: AppBase | undefined;
}

function Header(props: Props) {
  const { initState } = props;
  return (
    <header className="max-w-[1250px] mx-auto py-5 items-center px-2">
      <div className="justify-between grid grid-cols-3 grid-areas-horizontal tablet:grid-areas-vertical">
        <Link
          href={'/'}
          className="cursor-pointer grid-in-[logo] w-[103px] tablet:w-[95px]"
        >
          <Image
            src={
              'http://admin.lunatalk.co.kr/static/media/logo.e0e49014f4ed6f070031.jpg'
            }
            alt="logo"
            width={255}
            height={111}
          />
        </Link>
        <nav className="flex gap-5 items-center justify-center grid-in-[menu]">
          {initState?.product_category.map((item) => (
            <Link
              href={`/category/${item.uuid}`}
              key={item.uuid}
              className='className="text-[16px] tablet:text-[14px] tablet:block tablet:w-full text-center tablet:p-3'
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-5 items-center justify-end grid-in-[side]">
          <span className="text-[23px] tablet:text-[16px] hover:text-[#6f42c1]">
            <BsSearch />
          </span>
          <span className="text-[23px] tablet:text-[16px] hover:text-[#6f42c1]">
            <BsFillPersonFill />
          </span>
          <span className="text-[23px] tablet:text-[16px] hover:text-[#6f42c1]">
            <BsBag />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
