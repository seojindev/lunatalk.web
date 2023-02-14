import _ from 'lodash';
import ProductTab from './ProductTab';

interface ProductTabsProps {
  onClick: (value: string) => void;
  tabs: { value: string; name: string }[];
  selectedTab: string;
}

function ProductTabs(props: ProductTabsProps) {
  const { onClick, tabs, selectedTab } = props;
  return (
    <div className="grid grid-cols-3 px-40 text-center border-b-[1px] border-[#d7d7d7] text-xl font-semibold tracking-[-1.3px] tablet:px-20 tablet:text-base tablet:gap-4 mobile:px-10 mobile:text-sm">
      {_.map(tabs, (tab, index) => {
        const { name, value } = tab;
        return (
          <ProductTab
            key={name + index}
            value={value}
            name={name}
            onClick={onClick}
            selectedTab={selectedTab}
          />
        );
      })}
    </div>
  );
}

export default ProductTabs;
