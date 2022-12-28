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
    <div>
      <div>
        <Link href={`/product/${item.uuid}`}>
          <a>
            <Image src={item.rep_image.url} width={270} height={270} />
          </a>
        </Link>
      </div>
      <div className="text-center pt-2">
        <h3 className="text-sm font-bold">{item.name}</h3>
        <p className="text-xs text-[#888] mb-2">
          리뷰: {item.review_count.number}
        </p>
        <div className="border-t-[1px] border-[#f0f0f0] py-1">
          {_.map(item.color, (color) => (
            <span className="text-[12px] text-[#595959]" key={color.id}>
              {color.name}
            </span>
          ))}
        </div>
        <div className="text-[14px]">
          <p className="text-[#8e8e8e] line-through">
            {item.original_price.string}원
          </p>
          <p>{item.price.string}원</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
