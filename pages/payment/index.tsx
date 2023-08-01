import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import Button from '../../components/auth/elements/Button';

interface Props {
  result: boolean;
}

const Payment: NextPage<Props> = ({ result }: Props) => {
  const onClick = () => {
    if (window.opener) {
      window.opener.location.href = '/';
    }
    window.close();
  };
  return (
    <div className="text-center text-xl tablet:text-xl mobile:text-base flex flex-col gap-3 justify-center items-center pb-10 h-[100vh]">
      <h1 className="text-3xl text-[#a749ff] font-semibold -tracking-[2px]">
        {result ? '결제완료' : '결제실패'}
      </h1>
      <p className="-tracking-[1.3px]">
        {result
          ? '결제가 정상적으로 진행되었습니다.'
          : '결제가 정상적으로 진행되지 않았습니다.'}
      </p>
      <Button
        type="button"
        className="bg-[#a749ff] text-white p-2 text-sm rounded w-32"
        buttonType="full"
        onClick={onClick}
        text="메인으로 이동하기"
      />
    </div>
  );
};

export default Payment;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = context.query.result as string;

  if (result === 'true') {
    return {
      props: {
        result: true,
      },
    };
  }
  return {
    props: {
      result: false,
    },
  };
};
