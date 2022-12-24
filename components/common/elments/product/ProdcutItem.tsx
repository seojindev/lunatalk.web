import Image from 'next/image';
import Link from 'next/link';

function ProductItem() {
  return (
    <div>
      <div>
        <Link href={'/product/1'}>
          <a>
            <Image
              src={
                'https://media.lunatalk.co.kr/storage/products/rep/6cfbd8f340e67cf8791d7a638b91df80f4c2ef7e/AlvN623pmdPBrFNcDYHFTrRdnLBg1ZDQNvJATZtG.JPG'
              }
              width={270}
              height={270}
            />
          </a>
        </Link>
      </div>
      <div className="text-center pt-2">
        <h3 className="text-sm font-bold">쁘띠리본월렛</h3>
        <p className="text-xs text-[#888] mb-2">리뷰: 3</p>
        <div className="border-t-[1px] border-[#f0f0f0] py-1">
          <span className="text-[12px] text-[#595959]">블루</span>
        </div>
        <div className="text-[14px]">
          <p className="text-[#8e8e8e] line-through">30000원</p>
          <p>40000원</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
