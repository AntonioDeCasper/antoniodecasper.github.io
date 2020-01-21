//@flow
import React from 'react';

//Import ICONS
import {FaTelegramPlane} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';
import {AiOutlineSkype} from 'react-icons/ai';

//Import LIBS
import {LightenDarkenColor} from '../../libs/utils';

//Import STYLES
import {theme} from '../../store';

const {primaryColor, secondaryColor, textColor} = theme.colors.contact;

const CONTACTS_INFO = [
  {
    index: 0,
    name: 'Email:',
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
    name: 'Telegram:',
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
    name: 'Skype:',
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
];

const INPUT_DEFAULT_STYLES = {
  field: {
    borderColor: secondaryColor,
    color: textColor,
  },
  placeholder: {
    color: LightenDarkenColor(primaryColor, 40),
  },
  placeholderFocused: {
    color: secondaryColor,
  },
};

export {CONTACTS_INFO, INPUT_DEFAULT_STYLES};
