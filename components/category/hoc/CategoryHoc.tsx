import useCategoryDataQuery from '../../../hooks/query/useCategoryDataQuery';
import _ from 'lodash';

interface CategoryHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function CategoryHoc(props: CategoryHocProps) {
  const { WrappedComponent } = props;
  const { optionOnChange, data, options, selectedOption } =
    useCategoryDataQuery();

  const CategoryData = {
    options,
    optionOnChange,
    selectedOption,
    items: data?.products
      ? _.compact(
          _.map(data.products, (item) => {
            if (item.rep_image.url) {
              return item;
            } else {
              return null;
            }
          }),
        )
      : [],
  };

  return <WrappedComponent {...CategoryData} />;
}

export default CategoryHoc;
