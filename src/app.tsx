// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { useLocalStorageState } from 'ahooks';
import { ConfigProvider, theme } from 'antd';
import React, { PropsWithChildren } from 'react';

export async function getInitialState(): Promise<any> {
  return {
    name: 'Steve',
  };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

const Comp: React.FC<PropsWithChildren> = (props) => {
  const [isDark] = useLocalStorageState('theme.dark', {
    defaultValue: false,
    listenStorageChange: true,
  });

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: '"MiSans VF", system-ui, sans-serif',
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function rootContainer(container, _args) {
  return (
    <>
      <Comp>{container}</Comp>
    </>
  );
}
