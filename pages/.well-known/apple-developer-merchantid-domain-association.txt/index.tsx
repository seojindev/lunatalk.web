import { NextPage } from 'next';
import { useEffect } from 'react';
import { promises as fs } from 'fs';

const test: NextPage = (props: any) => {
  const { file } = props;
  useEffect(() => {
    // 페이지가 로드되면 파일 다운로드 시작
    downloadFile();
  }, []);
  const downloadFile = () => {
    let fileName = 'apple-developer-merchantid-domain-association.txt';
    const link = document.createElement('a');
    const blob = new Blob([file], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link); // FireFox
    link.click();
    // 작업이 끝나면 링크를 제거
    document.body.removeChild(link);
  };
  return <></>;
};

export default test;

export const getServerSideProps = async (context: any) => {
  const file = await fs.readFile(
    'https://lunatalk.co.kr/apple-developer-merchantid-domain-association.txt',
    'utf8',
  );
  return {
    props: { file },
  };
};
