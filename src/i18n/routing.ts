import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/uslugi': { pl: '/uslugi', en: '/services' },
    '/portfolio': '/portfolio',
    '/cennik': { pl: '/cennik', en: '/pricing' },
    '/kontakt': { pl: '/kontakt', en: '/contact' },
  },
});
