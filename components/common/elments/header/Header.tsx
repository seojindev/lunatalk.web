import Image from 'next/image';
import Link from 'next/link';
import { BsBag, BsFillPersonFill, BsSearch } from 'react-icons/bs';
import { AppBase } from '../../../../states/initData';

interface Props {
  initState: AppBase | null;
}

function Header(props: Props) {
  const { initState } = props;
  return (
    <header className="max-w-[1250px] mx-auto py-5 items-center">
      <div className="flex justify-between">
        <Link href={'/'} className="cursor-pointer">
          <a>
            <Image
              src={
                'http://admin.lunatalk.co.kr/static/media/logo.e0e49014f4ed6f070031.jpg'
              }
              width={103}
              height={45}
            />
          </a>
        </Link>
        <nav className="flex gap-5 items-center">
          {initState?.product_category.map((item) => (
            <Link href={`/category/${item.uuid}`} key={item.uuid}>
              <a className="text-[16px]">{item.name}</a>
            </Link>
          ))}
        </nav>
        <div className="flex gap-5 items-center">
          <span className="text-[23px] hover:text-[#6f42c1]">
            <BsSearch />
          </span>
          <span className="text-[23px] hover:text-[#6f42c1]">
            <BsFillPersonFill />
          </span>
          <span className="text-[23px] hover:text-[#6f42c1]">
            <BsBag />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
