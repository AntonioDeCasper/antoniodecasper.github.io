//@flow
import React from 'react';
import {useWindowDimension} from '../../context';

//Import ICONS
import {FaCss3, FaHtml5, FaReact} from 'react-icons/fa';
import {DiJavascript, DiJqueryLogo} from 'react-icons/di';
import {AiOutlineLayout, AiOutlineQuestion} from 'react-icons/ai';

const convertTagToIcon = (tagName: string) => {
  switch (tagName) {
    case 'html5':
      return {
        icon: <FaHtml5 style={{marginTop: -14, marginLeft: -15}} size={30} />,
        color: '#dd3d1d',
      };
    case 'css3':
      return {
        icon: <FaCss3 style={{marginTop: -14, marginLeft: -14}} size={30} />,
        color: '#54b2e9',
      };
    case 'javascript':
      return {
        icon: (
          <DiJavascript style={{marginTop: -15, marginLeft: -16}} size={32} />
        ),
        color: '#ebba25',
      };
    case 'jquery':
      return {
        icon: (
          <DiJqueryLogo style={{marginTop: -15, marginLeft: -15}} size={30} />
        ),
        color: '#386fb0',
      };
    case 'react':
      return {
        icon: <FaReact style={{marginTop: -15, marginLeft: -15}} size={30} />,
        color: '#61d4f4',
      };
    case 'ui/ux design':
      return {
        icon: (
          <AiOutlineLayout
            style={{marginTop: -15, marginLeft: -15}}
            size={30}
          />
        ),
        color: '#9C27B0',
      };
    default:
      return {
        icon: (
          <AiOutlineQuestion
            style={{marginTop: -15, marginLeft: -15}}
            size={30}
          />
        ),
        color: '#26A69A',
      };
  }
};

const useSideMenuWidth = () => {
  const {width} = useWindowDimension();

  if (width) {
    if (width > 1200) {
      return 750;
    }

    if (width > 992) {
      return 700;
    }

    if (width > 768) {
      return 600;
    }

    if (width > 480) {
      return 380;
    }

    if (width > 0) {
      return width;
    }
  }

  return 250;
};

export {convertTagToIcon, useSideMenuWidth};
