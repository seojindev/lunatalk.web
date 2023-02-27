import Link from 'next/link';

function SubMenu() {
  return (
    <div className="flex flex-row gap-3 justify-end mb-3 text-sm">
      <Link href="/auth/register">회원가입</Link>
      <Link href="/auth/register">비밀번호 찾기</Link>
    </div>
  );
}

export default SubMenu;
