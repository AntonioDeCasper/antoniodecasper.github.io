//@flow
import React from 'react';

//Import ICONS
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa';

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

export {SOCIAL_LINKS};
