import { defineConfig } from '@umijs/max';

export default defineConfig({
  locale: {},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  reactQuery: {
    devtool: true,
    queryClient: true,
  },
  layout: {
    title: '@umijs/max',
  },
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  icons: {
    autoInstall: {},
    include: [],
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Index',
    },
  ],
  links: [
    {
      href: '/assets/fonts/MiSans/MiSans.css',
      rel: 'stylesheet',
    },
  ],
  npmClient: 'yarn',
});
