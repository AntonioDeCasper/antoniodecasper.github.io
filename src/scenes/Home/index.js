//@flow
import * as React from 'react';
import {ThemeContext} from '../../store';
import {useTranslation} from 'react-i18next';

//Import ICONS
import {GoPerson} from 'react-icons/go';
import {GiBriefcase} from 'react-icons/gi';

//Import COMPONENTS
import {Button, TextAnimated} from '../../components';

//Import HOCs
import {withLink} from '../../hoc';

//Import STYLES
import './styles.css';
import '../../libs/animate.css/animate.min.css';

type Props = {|
  className?: string,
|};

type InjectedProps = {|
  to: string,
  exact?: boolean,
  activeClassName?: string,
  classNameLink: string,
|};

type ButtonProps = {|
  className?: string,
  iconClassName?: string,
  text: string,
  theme?: 'sun' | 'sun-inverted',
  icon?: React$Element<'svg'>,
  animationType?: 'position-aware' | 'swipe-left',
  ...InjectedProps,
|};

const ButtonWithLink = withLink<React.Config<ButtonProps, InjectedProps>>(
  Button,
);

const textList = [
  {
    text: 'Anton Gribenkov',
    className:
      'header header_type_h3 header_tt_uppercase text-color_yellow header_fw_bold',
  },
  {
    text: '<Front-End Developer />',
    className:
      'header header_type_h3 header_tt_uppercase text-color_yellow header_fw_bold',
  },
];

const HomePage = React.memo<Props>(({className}) => {
  const classNames = ['page-content page-home', className].join(' ');
  const {t} = useTranslation('home');
  const {primaryColor, secondaryColor, textColor} = React.useContext(
    ThemeContext,
  ).colors.home;

  const {pageTransition} = React.useContext(ThemeContext).variables;

  const [isRenderState, setIsRenderState] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  console.log('%cRender HomePage', 'color: green');

  const styles = {
    pageHome: {
      backgroundColor: primaryColor,
      color: textColor,
    },
    buttonAbout: {
      borderColor: secondaryColor,
      color: secondaryColor,
    },
    buttonAboutActive: {
      color: textColor,
    },
    buttonPortfolio: {
      borderColor: secondaryColor,
      color: textColor,
    },
  };

  return (
    <div style={styles.pageHome} className={classNames}>
      {isRenderState && (
        <div className="page-content__container">
          <div className="page-content__box"></div>
          <div className="page-content__box page-content__box_size_double">
            <div className="page-home__hello-box">
              <div className="animated bounceInDown text-common text-common_tt_uppercase text-common_fz_medium">
                {t('Welcome')}
              </div>

              <div className="animated fadeIn delay-1s paragraph">
                <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
                  {t('Im')}
                </div>

                <TextAnimated
                  className="page-home__animated-text"
                  textList={textList}
                  delay={{show: 4000, start: 1500}}
                />
              </div>

              <div className="animated bounceInRight text-common paragraph paragraph_lh_large">
                {t('About')}
              </div>

              <div className="page-home__btn-container">
                <ButtonWithLink
                  to="/about"
                  theme="sun-inverted"
                  text={t('ButtonAbout')}
                  className="page-home__about-btn animated bounceInLeft"
                  iconClassName="page-home__about-icon"
                  icon={<GoPerson size={20} />}
                  animationType="position-aware"
                  style={styles.buttonAbout}
                  activeStyle={styles.buttonAboutActive}
                />

                <ButtonWithLink
                  to="/portfolio"
                  theme="sun"
                  text={t('ButtoPortfolio')}
                  className="page-home__portfolio-btn animated bounceInRight"
                  iconClassName="page-home__portfolio-icon"
                  icon={<GiBriefcase size={26} />}
                  animationType="swipe-left"
                  style={styles.buttonPortfolio}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
