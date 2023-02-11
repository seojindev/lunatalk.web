import _ from 'lodash';

interface CategorySelectProps {
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
}

function CategorySelect(props: CategorySelectProps) {
  const { selectedOption, options, onChange } = props;
  return (
    <select value={selectedOption} onChange={onChange} className="text-sm">
      {_.map(options, (item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default CategorySelect;
