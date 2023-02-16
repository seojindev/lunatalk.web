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
        <Image
          key={item.id}
          src={item.url}
          alt="상품"
          width={1170}
          height={30000}
        />
      ))}
    </div>
  );
}

export default ProductDetailImage;
