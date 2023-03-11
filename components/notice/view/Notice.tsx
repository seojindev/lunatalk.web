import { useRouter } from 'next/router';
import { NoticeData } from '../hoc/noticeHoc';

type NoticeProps = NoticeData;

function Notice(props: NoticeProps) {
  const router = useRouter();
  const { detail } = props;
  const onBack = () => {
    router.back();
  };
  if (!detail) {
    return (
      <div className="min-h-[300px] flex justify-center items-center -tracking-[1px] text-base flex-col gap-3">
        <p>존재하지 않는 공지사항 입니다.</p>
        <div>
          <button
            type="button"
            className="bg-[#a749ff] p-2 text-white rounded-2xl tablet:text-sm"
            onClick={onBack}
          >
            뒤로가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 -tracking-[1px]">
      <h3 className="font-semibold text-xl">공지사항</h3>
      <div className="flex flex-col tablet:text-sm">
        <div className="flex flex-row justify-between border-t-2 border-t-[#a749ff] p-3 border-b-[1px] border-b-[#ccc] mobile:flex-col mobile:gap-2">
          <div className="flex flex-row gap-2">
            <strong>[{detail?.category.code_name}]</strong>
            <p>{detail?.title}</p>
          </div>
          <p>{detail?.created_at.type2}</p>
        </div>
        <div className="p-3 border-b-[1px] border-b-[#ccc] min-h-[300px]">
          <p>{detail?.content}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="bg-[#a749ff] p-2 text-white rounded-2xl tablet:text-sm"
          onClick={onBack}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default Notice;
