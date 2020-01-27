//@flow
import {home} from './home.i18n';
import {about} from './about.i18n';
import {contact} from './contact.i18n';
import {portfolio} from './portfolio.i18n';

export const resources = {
  en: {
    home: home.en,
    about: about.en,
    contact: contact.en,
    portfolio: portfolio.en,
    routes: {
      Home: 'Home',
      About: 'About',
      Portfolio: 'Portfolio',
      Contact: 'Contact',
    },
  },
  ru: {
    home: home.ru,
    about: about.ru,
    contact: contact.ru,
    portfolio: portfolio.ru,
    routes: {
      Home: 'Главная',
      About: 'Обо мне',
      Portfolio: 'Портфолио',
      Contact: 'Контакты',
    },
  },
};
