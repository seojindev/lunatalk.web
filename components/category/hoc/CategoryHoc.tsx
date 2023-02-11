import useCategoryDataQuery from '../../../hooks/query/useCategoryDataQuery';

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
    items: data?.products || [],
  };

  return <WrappedComponent {...CategoryData} />;
}

export default CategoryHoc;
