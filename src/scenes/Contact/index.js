//@flow
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import {useTheme, useWindowDimension} from '../../store';

//Import COMPONENTS
import {Link, Button} from '../../components';
import {InputWithValidation} from '../../hoc';

//Import HOOKS
import {useContactInfo} from './hooks';

//Import LIBS
import {ContactSchema} from '../../validation';

//Import CONSTANTS
import {INPUT_DEFAULT_STYLES, SOCIAL_LINKS} from './constants';

//Import STYLES
import './styles.css';

type Props = {
  className?: string,
};

const ContactPage = ({className}: Props) => {
  const classNames = ['page-content page-contact', className].join(' ');
  const {t} = useTranslation('contact');
  const {width} = useWindowDimension();
  const {primaryColor, secondaryColor, textColor} = useTheme().colors.contact;
  const {pageTransition} = useTheme().variables;
  const {info} = useContactInfo();

  const [isRenderState, setIsRenderState] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, [pageTransition]);

  const styles = {
    pageContact: {
      backgroundColor: primaryColor,
      color: textColor,
    },
    socialLink: {
      color: secondaryColor,
    },
    socialLinkFacebook: {
      color: '#4267b2',
    },
    socialLinkLinkedIn: {
      color: '#3977b5',
    },
    socialLinkGithub: {
      color: '#ffffff',
    },
  };

  const handleSubmitFormik = (values, actions) => {
    console.log('handleSubmitFormik');
  };

  console.log('%cRender ContactPage', 'color: green');

  return (
    <div style={styles.pageContact} className={classNames}>
      {isRenderState && (
        <div className="page-content__container page-contact__container">
          <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
            <span>Contact</span>
            <span style={{color: secondaryColor, marginLeft: 12}}>Me</span>
            <span>.</span>
          </div>

          <div className="paragraph text-backline page-content__second-header">
            <div
              style={{
                background: `linear-gradient( ${primaryColor} 70%, transparent)`,
              }}
              className="text-common text-common_tt_uppercase text-backline__text-box animated bounceInRight">
              <span style={{color: secondaryColor}}>{t('Header')}</span>
            </div>
            <div className="text-backline__line"></div>
          </div>

          <div className="page-contact__contacts-form">
            <div className="page-contact__contacts-block">
              <div className="page-contact__contacts-wrapper">
                {info.map((info, index) => (
                  <div
                    key={info.index}
                    className="paragraph paragraph_align_left page-contact__contact-paragraph">
                    <div
                      style={{animationDelay: `${index * 100 * 2}ms`}}
                      className="text-common_line animated flipInX">
                      {info.nameIcon}

                      <span className="text-common">{info.name}</span>
                    </div>

                    <div
                      style={{animationDelay: `${index * 100 * 2 + 100}ms`}}
                      className="text-common text-common_weight_bold page-contact__contact-text animated flipInX">
                      {info.value}
                    </div>
                  </div>
                ))}

                <div className="paragraph paragraph_align_left page-contact__contact-paragraph">
                  <div
                    style={{animationDelay: `600ms`}}
                    className="text-common text-common_line animated flipInX page-contact__social-txt">
                    {t('Social')}
                  </div>

                  <div className="text-common page-contact__social-links-block">
                    {SOCIAL_LINKS(width && width < 992 ? 50 : 30).map(
                      socialLink => (
                        <Link
                          key={socialLink.id}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="page-contact__social-link animated flipInX"
                          href={socialLink.to}
                          onHoverStyle={styles[socialLink.id]}
                          style={{
                            ...styles.socialLink,
                            ...{animationDelay: `700ms`},
                          }}>
                          {socialLink.icon}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="page-contact__form-block">
              <div className="paragraph paragraph_align_left">
                <div className="text-common animated fadeIn">
                  {t('ContactText')}
                </div>
              </div>

              <Formik
                initialValues={{firstName: '', email: '', message: ''}}
                validationSchema={ContactSchema}
                onSubmit={handleSubmitFormik}>
                {props => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="paragraph page-contact__form-paragraph">
                      <InputWithValidation
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.firstName}
                        name="firstName"
                        placeholder={t('FirstName')}
                        styles={INPUT_DEFAULT_STYLES}
                        className="page-contact__form-name animated flipInX"
                        errors={props.errors.firstName}
                        touched={props.touched.firstName}
                      />

                      <InputWithValidation
                        type="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        name="email"
                        placeholder={t('Email')}
                        styles={INPUT_DEFAULT_STYLES}
                        className="page-contact__form-email animated flipInX"
                        errors={props.errors.email}
                        touched={props.touched.email}
                      />
                    </div>

                    <div className="paragraph">
                      <InputWithValidation
                        as="textarea"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.message}
                        name="message"
                        placeholder={t('Message')}
                        styles={INPUT_DEFAULT_STYLES}
                        errors={props.errors.message}
                        touched={props.touched.message}
                        className="animated zoomIn"
                      />
                    </div>

                    <div className="paragraph paragraph_align_left">
                      <Button
                        type="submit"
                        text={t('SubmitText')}
                        className="animated flipInX page-contact__submit"
                        animationType="swipe-left"
                        theme="sun"
                        style={{animationDelay: '800ms'}}
                      />
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
