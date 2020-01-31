//@flow
import React from 'react';
import {LightenDarkenColor} from '../../utils';

//Import ICONS
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa';

//Import STYLES
import {theme} from '../../store';

const {primaryColor, secondaryColor, textColor} = theme.colors.contact;

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

const SOCIAL_LINKS = (size: number) => [
  {
    id: 'socialLinkFacebook',
    to: 'https://www.facebook.com/anton.gribenkov',
    icon: <FaFacebookSquare size={size} />,
  },
  {
    id: 'socialLinkLinkedIn',
    to: 'https://www.linkedin.com/in/anton-gribenkov/',
    icon: <FaLinkedin size={size} />,
  },
  {
    id: 'socialLinkGithub',
    to: 'https://github.com/AntonioDeCasper',
    icon: <FaGithubSquare size={size} />,
  },
];

export {INPUT_DEFAULT_STYLES, SOCIAL_LINKS};
