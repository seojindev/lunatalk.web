import useFind from '../../../hooks/auth/useFind';

interface FindPasswordHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function FindPasswordHoc(props: FindPasswordHocProps) {
  const { WrappedComponent } = props;

  const { register, errors, isLoading, onSubmit } = useFind({
    findType: 'password',
  });

  const findData = {
    register,
    errors,
    isLoading,
    onSubmit,
    findType: 'password',
  };

  return <WrappedComponent {...findData} />;
}

export default FindPasswordHoc;
