import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { TwitterIcon } from './components/Icons';

const config: DocsThemeConfig = {
  
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Multus',
        description: 'Multus | %s',
      };
    }
    return {
      titleTemplate: 'Multus',
      description: 'Multus is a an AQW Guild based in Yorumi',
    };
  },
  logo: (
    <>
      <img src="https://avatars.githubusercontent.com/u/135822576?s=200&v=4" alt="Multus Logo" width="36" height="36" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Multus
      </span>
    </>),
  project: {
    link: 'https://github.com/multusaqw/api',
  },
  chat: {
    link: 'https://discord.gg/multus',
  },
  docsRepositoryBase: 'https://github.com/multusaqw/api',
  gitTimestamp: <></>,
  main: ({ children }) => <div style={{ maxWidth: 1024, margin: '0 auto' }}>{children}</div>,
  navbar: {
    extraContent:
  <>
    <TwitterIcon />
  </>,
  },
  themeSwitch: {
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: '',
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="https://avatars.githubusercontent.com/u/135822576?s=200&v=4" />
    </>
  ),
  footer: {
    component: () => <div />,
  },

};

export default config;