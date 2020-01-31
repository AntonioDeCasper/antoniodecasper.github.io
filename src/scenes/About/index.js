//@flow
import React, {memo, useEffect, useState, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, useWindowDimension} from '../../store';

//Import COMPONENTS
import {GoogleMap, TextBackline} from '../../components';

//Import ASSETS
import photo from '../../assets/images/photo_about.png';

//Import STYLES
import './styles.css';

type Props = {
  className?: string,
};

const AboutPage = memo<Props>(({className}) => {
  const classNames = ['page-content', className].join(' ');
  const {t} = useTranslation('about');
  const {primaryColor, secondaryColor, textColor} = useTheme().colors.about;
  const {pageTransition} = useTheme().variables;
  const {width} = useWindowDimension();

  const [isRenderState, setIsRenderState] = useState<boolean>(false);
  const [activeTabIndexState, setActiveTabIndexState] = useState<number>(0);

  const PERSONAL_INFO = useMemo(
    () => [
      {index: 0, name: t('FirstName'), value: t('FirstNameVal')},
      {index: 1, name: t('LastName'), value: t('LastNameVal')},
      {index: 2, name: t('Birthdate'), value: t('BirthdateVal')},
      {index: 3, name: t('Nationality'), value: t('NationalityVal')},
      {index: 4, name: t('Address'), value: t('AddressVal')},
      {index: 5, name: t('Languages'), value: t('LanguagesVal')},
      {
        index: 6,
        name: t('Email'),
        value: (
          <a
            style={{color: secondaryColor}}
            className="page-about__skype-link"
            href="mailto:antongribenkov@gmail.com">
            {t('EmailVal')}
          </a>
        ),
      },
      {index: 7, name: t('Telegram'), value: t('TelegramVal')},
      {
        index: 8,
        name: t('Skype'),
        value: (
          <a
            className="page-about__skype-link"
            style={{color: secondaryColor}}
            target="_blank"
            rel="noopener noreferrer"
            href="https://join.skype.com/invite/cCV5tEfG0DKw">
            {t('SkypeVal')}
          </a>
        ),
      },
    ],
    [t, secondaryColor],
  );

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

    return () => {
      clearTimeout(timeout);
    };
  }, [pageTransition]);

  const handleScroll = (e: SyntheticWheelEvent<HTMLDivElement>) => {
    // console.log('handleScroll: ', e.nativeEvent);
    const wheelDirection = e.nativeEvent.deltaY < 0 ? 0 : 1;

    setActiveTabIndexState(prevState => {
      if (
        (prevState === 1 && wheelDirection === 1) ||
        (prevState === 0 && wheelDirection === 0)
      ) {
        return prevState;
      }

      return wheelDirection === 1 ? prevState + 1 : prevState - 1;
    });
  };

  const handleEndTransition = () => {
    console.log('handleEndTransition!!!');
  };

  const handleOnDrag = () => {
    console.log('handleOnDrag');
  };

  console.log('%cRender AboutPage', 'color: green');

  return (
    <div
      onTouchMove={handleScroll}
      style={styles.pageAbout}
      className={classNames}
      onWheel={handleScroll}>
      {isRenderState && (
        <div className="page-about">
          <div className="page-content__container page-about__tab">
            <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
              <span style={{color: secondaryColor}}>{t('Me')}</span>
              <span>.</span>
            </div>

            <TextBackline
              className="page-about__backline-intro"
              options={{
                line: {color: secondaryColor},
                text: {
                  background: `linear-gradient( ${primaryColor} 70%, transparent)`,
                },
              }}
              textWrapperClassName="animated bounceInRight page-about__backline-intro-text">
              <span
                className="text-common text-common_tt_uppercase"
                style={{color: secondaryColor}}>
                {t('header')}
              </span>
            </TextBackline>

            <div className="page-about__personal-block">
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
                <TextBackline
                  className="page-about__backline-intro"
                  options={{
                    line: {color: secondaryColor},
                    text: {
                      background: `linear-gradient(to top, ${primaryColor} 70%, transparent)`,
                    },
                  }}
                  textWrapperClassName="animated bounceInRight">
                  <span
                    className="header header_fw_bold header_type_h3 header_tt_uppercase"
                    style={{color: secondaryColor}}>
                    {t('Skills')}
                  </span>
                </TextBackline>

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

          <div
            style={{backgroundColor: primaryColor}}
            onTransitionEnd={handleEndTransition}
            className={`page-content__container page-about__tab page-about__tab-skills ${
              activeTabIndexState === 1 ? 'page-about_isActive' : ''
            }`}>
            <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
              <span style={{color: secondaryColor}}>My</span>
              <span style={{marginRight: 12}}>.</span>
              <span>Skills</span>
            </div>

            <TextBackline
              className="page-about__backline-intro"
              options={{
                line: {color: secondaryColor},
                text: {
                  background: `linear-gradient( ${primaryColor} 70%, transparent)`,
                },
              }}
              textWrapperClassName="animated bounceInRight page-about__backline-intro-text">
              <span
                className="text-common text-common_tt_uppercase"
                style={{color: secondaryColor}}>
                Check my thoughts about myself.
              </span>
            </TextBackline>
          </div>
        </div>
      )}
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
