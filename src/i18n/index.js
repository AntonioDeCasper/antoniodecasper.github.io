//@flow
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    home: {
      Welcome: 'Welcome to my Home Page',
      Goodbye: 'Goodbye',
    },
    about: {
      Welcome: 'This page is about me',
    },
    routes: {
      Home: 'Home',
      About: 'About',
      Portfolio: 'Portfolio',
      Contact: 'Contact',
    },
  },
  ru: {
    home: {
      Welcome: 'Добро пожаловать на мою домашнюю страницу',
      Goodbye: 'До свидания',
    },
    about: {
      Welcome: 'Эта страница расскажет обо мне',
    },
    routes: {
      Home: 'Главная',
      About: 'Обо мне',
      Portfolio: 'Портфолио',
      Contact: 'Контакты',
    },
  },
};

const detectionOptions = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: detectionOptions,
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
