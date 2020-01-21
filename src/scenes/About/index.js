//@flow
import React, {memo, useEffect, useState, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../store';

//Import COMPONENTS
import {GoogleMap} from '../../components';

//Import ASSETS
import photo from '../../assets/images/photo_about.png';

//Import STYLES
import './styles.css';

type Props = {
  className?: string,
};

const PERSONAL_INFO = [
  {index: 0, name: 'First name:', value: 'Anton'},
  {index: 1, name: 'Last name:', value: 'Gribenkov'},
  {index: 2, name: 'Birthdate:', value: '25 july 1986'},
  {index: 3, name: 'Nationality:', value: 'Russian'},
  {index: 4, name: 'Address:', value: 'Barnaul, Altai Krai, Russia'},
  {index: 5, name: 'Languages:', value: 'Russian (native), English'},
  {index: 6, name: 'Email:', value: 'antoniodecasper@gmail.com'},
  {index: 7, name: 'Telegram:', value: '@AntonGribenkov'},
  {
    index: 8,
    name: 'Skype:',
    value: (
      <a
        className="page-about__skype-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://join.skype.com/invite/cCV5tEfG0DKw">
        Anton Gribenkov
      </a>
    ),
  },
];

const AboutPage = memo<Props>(({className}) => {
  const classNames = ['page-content page-about', className].join(' ');
  const {t} = useTranslation('about');
  const {primaryColor, secondaryColor, textColor} = useContext(
    ThemeContext,
  ).colors.about;
  const {pageTransition} = useContext(ThemeContext).variables;

  const [isRenderState, setIsRenderState] = useState<boolean>(false);

  const styles = {
    pageAbout: {
      backgroundColor: primaryColor,
      color: textColor,
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    const handleScroll = e => {
      console.log('handleScroll: ', e);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  console.log('%cRender AboutPage', 'color: green');

  return (
    <div style={styles.pageAbout} className={classNames}>
      {isRenderState && (
        <div
          style={{borderBottomColor: secondaryColor}}
          className="page-content__container page-about__container">
          <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
            <span style={{color: secondaryColor}}>Me</span>
            <span>.</span>
          </div>

          <div className="paragraph page-about__paragraph-header">
            <div
              style={{
                background: `linear-gradient( ${primaryColor} 70%, transparent)`,
              }}
              className="text-common page-about__paragraph-text animated bounceInRight">
              <span style={{color: secondaryColor}}>
                What can i say... I like to code.
              </span>
            </div>
          </div>

          <div
            style={{borderColor: secondaryColor}}
            className="page-about__personal-block">
            <div className="page-about__personal-photo">
              <div className="photo-container">
                <div
                  style={{borderColor: secondaryColor}}
                  className="photo-container__border"></div>
                <img
                  className="photo-container__image"
                  src={photo}
                  alt="About Anton Gribenkov"
                />
              </div>
            </div>

            <div className="page-about__personal-info">
              {PERSONAL_INFO.map((info, index) => (
                <div
                  className="paragraph page-about__paragraph-info"
                  key={info.index}>
                  <div
                    style={{animationDelay: `${index * 50}ms`}}
                    className="animated fadeIn text-common page-about__first-column">
                    {info.name}
                  </div>
                  <div
                    style={{
                      color: secondaryColor,
                      animationDelay: `${index * 50 +
                        PERSONAL_INFO.length * 50}ms`,
                    }}
                    className="animated fadeIn text-common text-common_weight_medium">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="page-about__next-button">
              <div
                style={{
                  color: secondaryColor,
                  background: `linear-gradient(to top, ${primaryColor} 70%, transparent)`,
                }}
                className="animated bounceInRight page-about__next-header header header_fw_bold header_type_h3 header_tt_uppercase">
                My skills
              </div>

              <div className="animated-arrows">
                <span
                  style={{
                    borderColor: secondaryColor,
                  }}
                  className="animated-arrows__arrow"></span>

                <span
                  style={{
                    borderColor: secondaryColor,
                  }}
                  className="animated-arrows__arrow"></span>

                <span
                  style={{
                    borderColor: secondaryColor,
                  }}
                  className="animated-arrows__arrow"></span>
              </div>
            </div>

            <div className="page-about__google-map">
              <GoogleMap />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
