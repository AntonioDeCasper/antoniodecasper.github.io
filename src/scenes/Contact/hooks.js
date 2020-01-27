//@flow
import React, {useMemo, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../store';

//Import ICONS
import {FaTelegramPlane} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';
import {AiOutlineSkype} from 'react-icons/ai';

const useContactInfo = () => {
  const {t} = useTranslation('contact');
  const {secondaryColor, textColor} = useContext(ThemeContext).colors.contact;

  const info = useMemo(() => [
    {
      index: 0,
      name: t('Email'),
      nameIcon: (
        <GoMail
          color={secondaryColor}
          className="page-contact__contacts-icon"
          size="21"
        />
      ),
      value: <span>antongribenkov@gmail.com</span>,
    },
    {
      index: 1,
      name: t('Telegram'),
      nameIcon: (
        <FaTelegramPlane
          color={secondaryColor}
          className="page-contact__contacts-icon"
          size="19"
        />
      ),
      value: <span>@AntonGribenkov</span>,
    },
    {
      index: 2,
      name: t('Skype'),
      nameIcon: (
        <AiOutlineSkype
          color={secondaryColor}
          className="page-contact__contacts-icon"
          size="21"
        />
      ),
      value: (
        <a
          style={{color: textColor}}
          target="_blank"
          rel="noopener noreferrer"
          href="https://join.skype.com/invite/cCV5tEfG0DKw">
          Anton Gribenkov
        </a>
      ),
    },
  ]);

  return {info};
};

export {useContactInfo};
