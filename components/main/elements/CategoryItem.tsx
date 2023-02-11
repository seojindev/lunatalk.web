import { divide } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  url: string;
  name: string;
  uuid: string;
}

function CategoryItem(props: Props) {
  return (
    <Link href={`category/${props.uuid}`} className="cursor-pointer">
      <div className="relative rounded after:rounded w-[270px] h-[270px] after:w-full after:h-full after:top-0 after:left-0 after:bg-black/30  after:content-[''] after:absolute tablet:w-full tablet:h-full">
        {props.url ? (
          <Image
            src={props.url}
            alt={props.name}
            className="block w-full"
            width={270}
            height={270}
          />
        ) : (
          <div className="w-full h-full"></div>
        )}
        <p className="absolute text-[22px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 tablet:text-[16px]">
          {props.name}
        </p>
      </div>
    </Link>
  );
}

export default CategoryItem;
