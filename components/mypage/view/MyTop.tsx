interface Props {
  name?: string;
}

function MyTop({ name }: Props) {
  return (
    <div className="bg-[#f5f5f5] rounded flex flex-col p-4 text-[#afafaf] justify-center items-center text-sm gap-2">
      <span>
        <strong className="text-[#a749ff]">{name}</strong> 님 안녕하세요.
      </span>
      <span>회원님의 마이페이지 입니다.</span>
      {/* <Button
          type="button"
          buttonType="not-full"
          text="프로필 관리"
          isRounded={true}
          className="!p-1"
        /> */}
    </div>
  );
}

export default MyTop;
