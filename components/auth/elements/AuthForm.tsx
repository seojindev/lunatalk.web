interface Props {
  children: React.ReactNode;
  handleSubmit: any;
}

function AuthForm(props: Props) {
  const { children, handleSubmit } = props;
  return (
    <div className="max-w-[700px] mx-auto p-16 border-[1px] border-[#ebebeb] rounded text-center flex flex-col gap-5 mobile:p-0 mobile:border-0 mobile:py-24">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}

export default AuthForm;
