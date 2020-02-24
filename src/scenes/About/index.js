//@flow
import React, {memo, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../context';

//Import COMPONENTS
import {SkillsScreen, InfoScreen} from './components';

//Import STYLES
import './styles.css';

type Props = {
  className?: string,
};

const AboutPage = memo<Props>(({className}) => {
  const classNames = ['page-content', className].join(' ');
  const {t} = useTranslation('about');
  const {primaryColor, textColor} = useTheme().colors.about;
  const {pageTransition} = useTheme().variables;

  const [isRenderState, setIsRenderState] = useState<boolean>(false);
  const [activeTabIndexState, setActiveTabIndexState] = useState<number>(1);

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

  console.log('%cRender AboutPage', 'color: green');

  return (
    <div
      onTouchMove={handleScroll}
      style={styles.pageAbout}
      className={classNames}
      onWheel={handleScroll}>
      <Helmet>
        <meta name="description" content={t('Description')} />
        <title>{t('Title')}</title>
      </Helmet>

      {isRenderState && (
        <div className="page-about">
          <InfoScreen className="page-content__container page-about__tab" />

          <SkillsScreen
            isActive={activeTabIndexState === 1}
            className="page-content__container page-about__tab"
          />
        </div>
      )}
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
