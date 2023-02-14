import cn from 'classnames';

interface ProductTabProps {
  onClick: (value: string) => void;
  value: string;
  name: string;
  selectedTab: string;
}

function ProductTab(props: ProductTabProps) {
  const { onClick, value, name, selectedTab } = props;
  return (
    <button
      onClick={() => onClick(value)}
      className={cn('py-2 block text-[#666] tablet:py-1', {
        'text-black border-b-2 border-black': selectedTab === value,
      })}
    >
      {name}
    </button>
  );
}

export default ProductTab;
