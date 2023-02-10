import { Category } from '../../../types/main';
import CategoryItem from '../elements/CategoryItem';

interface Props {
  categories: Category[];
}

function Categories({ categories }: Props) {
  return (
    <div className="flex gap-3 justify-between py-4 mb-14">
      {categories &&
        categories.map((item) => (
          <CategoryItem
            key={item.uuid}
            uuid={item.uuid}
            url={item.url}
            name={item.name}
          />
        ))}
    </div>
  );
}

export default Categories;
