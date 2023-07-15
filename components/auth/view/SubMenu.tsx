import Link from 'next/link';
import { useRouter } from 'next/router';

function SubMenu() {
  const router = useRouter();

  const isFindPage = router.pathname.indexOf('/auth/find') >= 0;
  return (
    <div className="flex flex-row gap-3 justify-end mb-3 text-sm">
      <Link href="/auth/register">회원가입</Link>
      {isFindPage ? (
        <Link href="/auth/login">로그인</Link>
      ) : (
        <Link href="/auth/find/login_id">아이디/비밀번호 찾기</Link>
      )}
    </div>
  );
}

export default SubMenu;
