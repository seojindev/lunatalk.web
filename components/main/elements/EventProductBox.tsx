import { ProductItem } from '../../common/elements';

function EventProductBox() {
  return (
    <div className="mb-14">
      <div className="pb-14 text-center text-[30px] font-semibold">
        <h2>BEST ITEM</h2>
      </div>
      <div className="flex justify-between">
        {[1, 2, 3, 4].map((item) => (
          <ProductItem key={item} />
        ))}
      </div>
    </div>
  );
}

export default EventProductBox;
