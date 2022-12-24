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
      <a>
        <div className="relative rounded after:rounded max-w-[270px] max-h-[270px] after:w-full after:h-full after:top-0 after:left-0 after:bg-black/30  after:content-[''] after:absolute">
          {props.url !== null && (
            <>
              <Image
                src={props.url}
                width={270}
                height={270}
                className="block w-full"
              />
              <p className="absolute text-[22px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                {props.name}
              </p>
            </>
          )}
        </div>
      </a>
    </Link>
  );
}

export default CategoryItem;
