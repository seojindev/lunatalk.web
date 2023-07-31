interface OrderInputProps {
  register: any;
  name: string;
  error?: string;
  id: string;
}

function Input(props: OrderInputProps) {
  const { register, error, name, id } = props;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#000] font-semibold">
        {name}
      </label>
      <input
        type="text"
        id={id}
        className="border-[1px] border-[#e6e6e6] px-5 py-3 rounded outline-none text-[14px]"
        {...register}
      />
      {error && <span className="text-[red] -tracking-normal">{error}</span>}
    </div>
  );
}

export default Input;
