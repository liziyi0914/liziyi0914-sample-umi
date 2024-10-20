import { useIntl } from '@@/exports';
import { Moon, SunOne } from '@icon-park/react';
import { useLocalStorageState } from 'ahooks';
import { App, ConfigProvider, FloatButton, theme } from 'antd';
import React from 'react';
import { Outlet } from 'umi';
import './index.less';

const Page: React.FC = () => {
  return <Outlet />;
};

const Layout: React.FC = () => {
  const [isDark, setIsDark] = useLocalStorageState('theme.dark', {
    defaultValue: false,
    listenStorageChange: true,
  });
  const i18n = useIntl();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: '"MiSans VF", system-ui, sans-serif',
        },
      }}
    >
      <App>
        <FloatButton.Group>
          <FloatButton
            tooltip={i18n.formatMessage({ id: 'darkMode' })}
            icon={isDark ? <Moon /> : <SunOne />}
            onClick={() => {
              setIsDark(!isDark);
            }}
          />
        </FloatButton.Group>
        <Page />
      </App>
    </ConfigProvider>
  );
};

export default Layout;
