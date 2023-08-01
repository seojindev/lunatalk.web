import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getCookies } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import { queryKeys } from '../../lib/query/queryKeys';
import { getMyOrder } from '../../lib/api/mypage';
import useMyPageQuery from '../../hooks/query/useMyPageQuery';
import Button from '../../components/auth/elements/Button';
import _ from 'lodash';
import Image from 'next/image';

const MyPage: NextPage = () => {
  const { myPageData } = useMyPageQuery();
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#f5f5f5] rounded flex flex-col p-4 text-[#afafaf] justify-center items-center text-sm gap-2">
        <span>
          <strong className="text-[#a749ff]">
            {myPageData?.user_info.name}
          </strong>{' '}
          님 안녕하세요.
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
      <div className="flex py-4 flex-col gap-5">
        <div className="bg-[#f5f5f5] flex w-full py-4 justify-center rounded">
          <p className="text-sm text-[#666] font-semibold">나의 주문 현황</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-grow items-center justify-center flex-col gap-3">
            <p className="text-[#666] font-semibold text-sm -tracking-normal">
              입금전
            </p>
            <p className="text-[#a749ff] text-sm">
              {myPageData?.order_state.price_before}
            </p>
          </div>
          <div className="flex flex-grow items-center justify-center flex-col gap-3">
            <p className="text-[#666] font-semibold text-sm -tracking-normal">
              배송 준비중
            </p>
            <p className="text-[#a749ff] text-sm">
              {myPageData?.order_state.delivery_brfore}
            </p>
          </div>
          <div className="flex flex-grow items-center justify-center flex-col gap-3">
            <p className="text-[#666] font-semibold text-sm -tracking-normal">
              배송중
            </p>
            <p className="text-[#a749ff] text-sm">
              {myPageData?.order_state.delivery_ing}
            </p>
          </div>
          <div className="flex flex-grow items-center justify-center flex-col gap-3">
            <p className="text-[#666] font-semibold text-sm -tracking-normal">
              배송완료
            </p>
            <p className="text-[#a749ff] text-sm">
              {myPageData?.order_state.delivery_end}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-grow py-3">
          <p className="w-full text-center border-[1px] border-[#f3f3f3] py-3 bg-[#f5f5f5] text-sm">
            주문 내역 조회
          </p>
          {/* <p className="w-full text-center border-[1px] border-[#f3f3f3] py-3 bg-[#f5f5f5]">
            최소/교환/반품 내역 조회
          </p> */}
        </div>
        <div className="flex flex-col">
          {_.map(myPageData?.list.order, (item, index) => (
            <div
              key={item.uuid + index}
              className="flex justify-between flex-grow text-sm items-center gap-2 border-b-[1px] py-5"
            >
              <Image
                src={item.rep_image.url}
                width={96}
                height={96}
                alt={item.uuid}
              />
              <p className="min-w-[200px] text-center">{item.order_name}</p>
              <p className="min-w-[200px] text-center">
                {item.created_at.type1}
              </p>
              <p className="min-w-[200px] text-center">{item.uuid}</p>
              <p className="min-w-[200px] text-center">
                {item.order_price.string}원
              </p>
              <p className="min-w-[200px] text-center">
                {item.state.code_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = getCookies(context);

  const accessToken = cookie.accessToken as string;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery([queryKeys.user, queryKeys.myPage], () =>
      getMyOrder(accessToken),
    ),
  ]);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
