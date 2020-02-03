//@flow
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../context';

//Import ICONS
import {FaTelegramPlane} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';
import {AiOutlineSkype} from 'react-icons/ai';

const useContactInfo = () => {
  const {t} = useTranslation('contact');
  const {secondaryColor, textColor} = useTheme().colors.contact;

  const info = useMemo(
    () => [
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
        value: (
          <a
            className="page-contact__contact-link"
            style={{color: textColor}}
            href="mailto:antongribenkov@gmail.com">
            antongribenkov@gmail.com
          </a>
        ),
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
            className="page-contact__contact-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://join.skype.com/invite/cCV5tEfG0DKw">
            Anton Gribenkov
          </a>
        ),
      },
    ],
    [t, secondaryColor, textColor],
  );

  return {info};
};

export {useContactInfo};
