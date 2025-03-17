import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../../types/common';

interface ProductItemProps {
  item: Product;
}

function ProductItem(props: ProductItemProps) {
  const { item } = props;

  return (
    <Link href={`/product/${item.uuid}`}>
      <div className="flex flex-col gap-2 items-center">
        <div>
          {item.rep_image.url && (
            <div className="max-w-[250px] overflow-hidden aspect-[1/1]">
              <img
                src={item.rep_image.url}
                alt={item.name}
                width={400}
                height={400}
                className="block"
                loading="lazy"
                placeholder="blur" // 추가
                // blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
              />
            </div>
          )}
        </div>
        <div className="text-center w-full">
          <h3 className="text-sm tablet:text-xs tablet:mb-1">{item.name}</h3>
          <p className="text-xs text-[#888] tablet:text-xs tablet:mb-1">
            리뷰: {item.review_count.number}
          </p>
          <div className="border-t-[1px] border-[#f0f0f0] py-1 tablet:py-0 ">
            {_.map(item.color, (color) => (
              <span
                className="text-[12px] text-[#595959] tablet:text-[10px]"
                key={color.id}
              >
                {color.name}
              </span>
            ))}
          </div>
          <div className="text-[14px] mb-3 tablet:text-[12px]">
            <p className="text-[#8e8e8e] line-through">
              {item.original_price.string}원
            </p>
            <p>{item.price.string}원</p>
          </div>
          {/* <div className="w-full bg-[#a749ff] text-white py-2 text-base tablet:text-xs">
            <button type="button" className="block w-full">
              장바구니 담기
            </button>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
