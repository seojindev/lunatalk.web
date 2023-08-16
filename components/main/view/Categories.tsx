import { Category } from '../../../types/main';
import CategoryItem from '../elements/CategoryItem';

interface Props {
  categories: Category[];
}

function Categories({ categories }: Props) {
  return (
    <div className="grid grid-cols-5 gap-3 justify-between py-4 mb-14 tablet:grid-cols-3 tablet:mb-5">
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
