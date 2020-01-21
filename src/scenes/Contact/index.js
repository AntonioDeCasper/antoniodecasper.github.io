//@flow
import React, {useState, useEffect, useContext} from 'react';
import {Formik} from 'formik';
import {ThemeContext} from '../../store';

//Import COMPONENTS
import {Link, Button} from '../../components';
import {InputWithValidation} from '../../hoc';

//Import ICONS
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';

//Import LIBS
import {ContactSchema} from '../../validation';

//Import CONSTANTS
import {CONTACTS_INFO, INPUT_DEFAULT_STYLES} from './constants';

//Import STYLES
import './styles.css';

type Props = {
  className?: string,
};

const ContactPage = ({className}: Props) => {
  const classNames = ['page-content page-contact', className].join(' ');
  const {primaryColor, secondaryColor, textColor} = useContext(
    ThemeContext,
  ).colors.contact;
  const {pageTransition} = useContext(ThemeContext).variables;

  const [isRenderState, setIsRenderState] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
              <span style={{color: secondaryColor}}>
                I&apos;m always open to a discussion of partnership.
              </span>
            </div>
            <div className="text-backline__line"></div>
          </div>

          <div className="page-contact__contacts-form">
            <div className="page-contact__contacts-block">
              <div className="page-contact__contacts-wrapper">
                {CONTACTS_INFO.map((info, index) => (
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
                    className="text-common text-common_line animated flipInX">
                    Social
                  </div>

                  <div className="text-common page-contact__social-links-block">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="page-contact__social-link animated flipInX"
                      href="https://www.facebook.com/anton.gribenkov"
                      onHoverStyle={styles.socialLinkFacebook}
                      style={{
                        ...styles.socialLink,
                        ...{animationDelay: `700ms`},
                      }}>
                      <FaFacebookSquare size={30} />
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="page-contact__social-link animated flipInX"
                      href="https://www.linkedin.com/in/anton-gribenkov/"
                      onHoverStyle={styles.socialLinkLinkedIn}
                      style={{
                        ...styles.socialLink,
                        ...{animationDelay: `800ms`},
                      }}>
                      <FaLinkedin size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-contact__form-block">
              <div className="paragraph paragraph_align_left">
                <div className="text-common animated fadeIn">
                  If you have any suggestion, project or even you want just say
                  &quot;Hello&quot; to me... please fill out the form below and
                  I will try to reply you shortly.
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
                        placeholder="First name"
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
                        placeholder="Email"
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
                        placeholder="Message"
                        styles={INPUT_DEFAULT_STYLES}
                        errors={props.errors.message}
                        touched={props.touched.message}
                        className="animated zoomIn"
                      />
                    </div>

                    <div className="paragraph paragraph_align_left">
                      <Button
                        type="submit"
                        text="Send message"
                        className="animated flipInX delay-1s page-contact__submit"
                        animationType="swipe-left"
                        theme="sun"
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
