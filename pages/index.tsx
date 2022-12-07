import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import client from '../lib/axios';

const Home: NextPage = () => {
  useEffect(() => {
    client({ url: '/api/system/base-data', method: 'GET' });
  }, []);

  return (
    <>
      <div className="font-extrabold text-xl">1231231</div>
      <div>1231231111321321</div>
    </>
  );
};

export default Home;
