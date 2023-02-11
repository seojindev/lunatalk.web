import CategoryHoc from './hoc/CategoryHoc';
import Category from './view/Category';

function CategoryComponent() {
  return <CategoryHoc WrappedComponent={Category} />;
}

export default CategoryComponent;
