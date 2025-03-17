import _ from 'lodash';
import Image from 'next/image';
import { Image as DetailImage } from '../../../types/common';

interface ProductDetailImageProps {
  image: DetailImage[];
}

function ProductDetailImage(props: ProductDetailImageProps) {
  const { image } = props;
  return (
    <div className="px-2 w-full">
      {_.map(image, (item) => (
        <img
          key={item.id}
          src={item.url}
          alt="상품"
          width={1170}
          height={30000}
          loading="lazy"
          placeholder="blur" // 추가
          // blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
        />
      ))}
    </div>
  );
}

export default ProductDetailImage;
