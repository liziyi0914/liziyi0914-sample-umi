import { Skeleton } from 'antd';
import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <Skeleton active />
    </div>
  );
};

export default LoadingPage;
