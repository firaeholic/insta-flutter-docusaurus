import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

require('dotenv').config(); // use for environment variables

const config: Config = {
  customFields: {
    paddleSandBox: process.env.NEXT_PUBLIC_PADDLE_SANDBOX,
    paddleVendorId: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID,
    paddleApiKey: process.env.NEXT_PUBLIC_PADDLE_API_KEY,
    paddleAuthCode: process.env.NEXT_PUBLIC_PADDLE_AUTH_CODE,
    paddleDeveloperId: process.env.NEXT_PUBLIC_PADDLE_DEVELOPER_ID,
    paddleTeamId: process.env.NEXT_PUBLIC_PADDLE_TEAM_ID,
  },

  title: 'Flutter App Templates & Themes',
  tagline: 'Flutter app templates, themes, and free starter kits, to help developers and entrepreneurs make mobile apps for iOS & Android in minutes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://instaflutter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'instaflutter', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [

  ],

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-26GLD9DF3K',
        anonymizeIP: false, // Should IPs be anonymized?
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) => {
            // Customize the edit URL
            return `https://github.com/dopebase/flutter-docs/edit/main/${docPath}`;
          },

        },
        blog: {
          showReadingTime: true,
        },
        
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/blog/**', '/blog', '/templates/**', '/templates', '/'],
          filename: 'docs-sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Instaflutter',
      logo: {
        alt: 'Instaflutter Logo - Flutter App Templates',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: '/',
          label: 'Home',
          position: 'right',
        },
        {
          href: '/templates',
          label: 'Templates',
          position: 'right',
        },
        {
          href: 'https://instaflutter.com/blog/',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              html: `Our mission at Instaflutter is to provide beautiful Flutter app templates, Flutter starter kits and Flutter freebies to help mobile developers jump straight into the action rather than reinventing the wheel by rewriting boring boilerplate code that every app needs.<br/><br/>
                 Our high-quality Flutter templates reflect our core values that consist of beautiful designs, highly-modularized code, and bug-free apps and top-notch user experience.<br/><br/>
                 Our founding team has product, design and development experience in top-tier companies such as Instagram and Twitter.`,
            },
          ],
        },
        {
          title: 'Instaflutter',
          items: [
            {
              label: 'Blog',
              to: 'https://instaflutter.com/blog/',
            },
            {
              label: 'Contact Us',
              to: 'https://instaflutter.com/contact-us/',
            },
            {
              label: 'Licenses',
              to: 'https://instaflutter.com/licenses/',
            },
            {
              label: 'Affiliate Program',
              to: 'https://instaflutter.com/affiliates',
            },
            {
              label: 'Privacy Policy',
              to: 'https://instaflutter.com/privacy/',
            },
            {
              label: 'Refund Policy',
              to: 'https://instaflutter.com/refunds/',
            },
            {
              label: 'Terms of Service',
              to: 'https://instaflutter.com/terms-of-service/',
            },
          ],
        },
        {
          title: 'Find us on',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/instaflutter',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/instamobileio/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/instamobileio',
            },
            {
              label: 'Dribbble',
              href: 'https://dribbble.com/iosapptemplates',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'iOS App Templates',
              href: 'https://iosapptemplates.com/',
            },
            {
              label: 'React Native Templates',
              href: 'https://instamobile.io/',
            },
            {
              label: 'Flutter Docs',
              href: 'https://instaflutter.com/docs',
            },
            {
              label: 'Dart Programming',
              href: 'https://www.dartlang.org/guides/get-started',
            },
            {
              label: 'Flutter Freebies',
              href: 'https://github.com/instaflutter',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Instaflutter. All rights reserved.`,
    },     
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
