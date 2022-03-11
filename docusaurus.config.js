// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My docs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wu', // Usually your GitHub org/user name.
  projectName: 'shen', // Usually your repo name.


  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        ignoreFiles:/^js.*md$/,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Youth',
        logo: {
          alt: 'youth Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'summary',
            position: 'left',
            label: '记录',
          },
          /*{
            to: '/blog',
            label: '博客',
            position: 'left'
          },*/
          {
            href: '//139.198.117.53:3081',
            label: '图片demo',
            position: 'left',
          },
          {
            href: '//139.198.117.53:3082',
            label: 'blog',
            position: 'left',
          },
          {
            href: 'https://github.com/wuzhouwei',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      metadata: [{name: 'keywords', content: '个人参考，个人总结，react，ts，给自己使用的文档。'}],
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}吴某人个人记录.浙ICP备2021040479号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
