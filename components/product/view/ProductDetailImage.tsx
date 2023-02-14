import Image from 'next/image';

interface ProductDetailImageProps {
  image: string;
}

function ProductDetailImage(props: ProductDetailImageProps) {
  const { image } = props;
  return (
    <div className="px-2 w-full">
      <Image src={image} alt="상품" width={1170} height={30000} />
    </div>
  );
}

export default ProductDetailImage;
