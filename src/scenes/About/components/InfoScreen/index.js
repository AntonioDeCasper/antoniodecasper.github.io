// @flow
import React, {memo, useMemo} from 'react';
import {useTheme} from '../../../../context';
import {useTranslation} from 'react-i18next';

// Import COMPONENTS
import {TextBackline, GoogleMap} from '../../../../components';

//Import ASSETS
import photo from '../../../../assets/images/photo_about.png';

// Import STYLES
import './styles.css';

type Props = {|className?: string|};

const InfoScreen = memo<Props>(({className}) => {
  const classNames = ['info-screen', className].join(' ');
  const {primaryColor, secondaryColor} = useTheme().colors.about;
  const {t} = useTranslation('about');

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
            className="info-screen__link"
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
            className="info-screen__link"
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

  return (
    <div className={classNames}>
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

      <div className="info-screen__content">
        <div className="info-screen__photo-block">
          <div className="photo-container">
            <div
              style={{borderColor: secondaryColor}}
              className="photo-container__border"
            />

            <img
              className="photo-container__image"
              src={photo}
              alt="About Anton Gribenkov"
            />
          </div>
        </div>

        <div className="info-screen__info-block">
          {PERSONAL_INFO.map((info, index) => (
            <div
              className="paragraph info-screen__paragraph-info"
              key={info.index}>
              <div
                style={{animationDelay: `${index * 50}ms`}}
                className="animated fadeIn text-common info-screen__first-column">
                {info.name}
              </div>

              <div
                style={{
                  color: secondaryColor,
                  animationDelay: `${index * 50 + PERSONAL_INFO.length * 50}ms`,
                }}
                className="animated fadeIn text-common text-common_weight_medium">
                {info.value}
              </div>
            </div>
          ))}
        </div>

        <div className="info-screen__next-button">
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

        <div className="info-screen__map-block">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
});

InfoScreen.displayName = 'InfoScreen';

export default InfoScreen;
