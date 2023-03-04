interface Props {
  register?: any;
  error?: string | undefined;
  placeHolder?: string;
  type: string;
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

function Input({
  register,
  error,
  placeHolder,
  type,
  children,
  name,
  value,
  onChange,
  disabled = false,
}: Props) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-row gap-3 items-center">
        <input
          className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3 w-full disabled:bg-[#f2f2f2] disabled:text-[#999]"
          type={type}
          placeholder={placeHolder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...register}
        />
        {children}
      </div>
      {error && <p className="text-left text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
