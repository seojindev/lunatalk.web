import { useEffect, useState } from 'react';
import { MainCategory } from '../../../types/main';
import CategoryItem from '../elements/CategoryItem';

interface Props {
  categories: MainCategory[];
}

function Categories({ categories }: Props) {
  const [category, setCategory] = useState<
    { name: string; uuid: string; url: string }[] | null
  >(null);
  useEffect(() => {
    if (!categories) return;
    const result = categories.map((item) => {
      return {
        name: item.name,
        uuid: item.uuid,
        url: item.image.url,
      };
    });
    setCategory(result);
  }, [categories]);

  return (
    <div className="flex gap-3 justify-between py-4 mb-14">
      {category &&
        category.map((item) => (
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
