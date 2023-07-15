import useFind from '../../../hooks/auth/useFind';

interface FindLoginIdHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function FindLoginIdHoc(props: FindLoginIdHocProps) {
  const { WrappedComponent } = props;

  const { register, errors, isLoading, onSubmit } = useFind({
    findType: 'loginId',
  });

  const findData = {
    register,
    errors,
    isLoading,
    onSubmit,
    findType: 'loginId',
  };

  return <WrappedComponent {...findData} />;
}

export default FindLoginIdHoc;
