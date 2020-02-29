//@flow
import * as React from 'react';
import {useTheme} from '../../context';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

//Import ICONS
import {Icon} from '@iconify/react';

import userOutlined from '@iconify/icons-ant-design/user-outlined';
import pictureFilled from '@iconify/icons-ant-design/picture-filled';

//Import COMPONENTS
import {Button, TextAnimated} from '../../components';

//Import STYLES
import './styles.css';

type Props = {|
  className?: string,
|};

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
  const {secondaryColor, textColor} = useTheme().colors.home;
  const {pageTransition} = useTheme().variables;
  const history = useHistory();

  const [isRenderState, setIsRenderState] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, [pageTransition]);

  console.log('%cRender HomePage', 'color: green');

  const handleRouteOnClick = route => {
    history.push(route);
  };

  const styles = {
    pageHome: {
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
      <Helmet>
        <meta name="description" content={t('Description')} />
        <title>{t('Title')}</title>
      </Helmet>

      {isRenderState && (
        <div className="page-content__container">
          <div className="page-home__container"></div>
          <div className="page-home__container page-home__container-double">
            <div className="page-home__hello-box">
              <div className="animated bounceInDown text-common text-common_tt_uppercase text-common_fz_m">
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
                <Button
                  theme="sun-inverted"
                  text={t('ButtonAbout')}
                  className="page-home__about-btn animated bounceInRight"
                  icon={<Icon icon={userOutlined} width={20} height={20} />}
                  animationType="position-aware"
                  style={styles.buttonAbout}
                  activeStyle={styles.buttonAboutActive}
                  onClick={() => handleRouteOnClick('/about')}
                />

                <Button
                  theme="sun"
                  text={t('ButtoPortfolio')}
                  className="page-home__portfolio-btn animated bounceInRight"
                  icon={<Icon icon={pictureFilled} width={24} height={24} />}
                  animationType="swipe-left"
                  style={styles.buttonPortfolio}
                  onClick={() => handleRouteOnClick('/portfolio')}
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
