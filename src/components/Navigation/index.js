/* @flow */
import React, {memo, useState, useEffect, useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../context';

//Import COMPONENTS
import NavigationLink from './components/NavigationLink';
import NavigationMenuContent from './components/NavigationMenuContent';
import {ButtonBurger, ButtonInline, SideMenu} from '../';

//Import STYLES
import './styles.css';

type Props = {|onLinkHover: (?string) => void, location: Object|};

const Navigation = memo<Props>(({onLinkHover, location}) => {
  const {colors} = useTheme();
  const {t, i18n} = useTranslation('routes');
  const colorFieldByLocation =
    colors[
      location.pathname.split('/')[1] ? location.pathname.split('/')[1] : 'home'
    ];

  const [languageState, setLanguageState] = useState<string>(i18n.language);
  const [isMenuActiveState, setIsMenuActiveState] = useState<boolean>(false);

  useEffect(() => {
    i18n.changeLanguage(languageState);
  }, [languageState, i18n]);

  const handleChangeLanguage = useCallback(
    (event: SyntheticEvent<HTMLDivElement>) => {
      const language = event.currentTarget.children[0].textContent;

      setLanguageState(language);
    },
    [],
  );

  const handleLinkHover = useCallback(
    route => {
      onLinkHover(route);
    },
    [onLinkHover],
  );

  const handleChangeMenuState = state => {
    setIsMenuActiveState(state);
  };

  const setRoutes = useMemo(() => {
    return [
      {
        path: '/',
        name: t('Home'),
      },
      {
        path: '/about',
        name: t('About'),
      },
      {
        path: '/portfolio',
        name: t('Portfolio'),
      },
      {
        path: '/contact',
        name: t('Contact'),
      },
    ];
  }, [t]);

  console.log('%cRender Navigation', 'color: green');

  return (
    <>
      <header
        style={{
          borderColor: colorFieldByLocation.secondaryColor,
        }}
        className="navigation">
        <div className="navigation__item navigation__burger-item">
          <ButtonBurger
            onStateChanged={handleChangeMenuState}
            color={colorFieldByLocation.secondaryColor}
            state={isMenuActiveState}
          />
        </div>

        <div className="navigation__item">
          {React.Children.toArray(
            setRoutes.map((route, i) => (
              /* eslint react/jsx-key: "off" */
              <NavigationLink
                style={{
                  color: colorFieldByLocation.textColor,
                  activeColor: colorFieldByLocation.secondaryColor,
                  hoverColor: colorFieldByLocation.secondaryColor,
                }}
                exact
                to={route.path}
                text={route.name}
                activeClassName="isActive"
                onMouseEnter={() => handleLinkHover(route.path)}
                onMouseLeave={() => handleLinkHover(null)}
                className={`btn-inline_active_double`}
                classNameLink={`animated zoomIn navigation__link navigation_delay_${i}`}
              />
            )),
          )}
        </div>

        <div style={{}} className="navigation__item">
          <ButtonInline
            style={{
              color: colorFieldByLocation.textColor,
              hoverColor: colorFieldByLocation.secondaryColor,
              activeColor: colorFieldByLocation.secondaryColor,
            }}
            text="ru"
            className={`animated zoomIn navigation_delay_4 navigation__lng-btn`}
            onClick={handleChangeLanguage}
            isActive={languageState === 'ru'}
          />

          <ButtonInline
            style={{
              color: colorFieldByLocation.textColor,
              hoverColor: colorFieldByLocation.secondaryColor,
              activeColor: colorFieldByLocation.secondaryColor,
            }}
            text="en"
            className={`animated zoomIn navigation_delay_5 navigation__lng-btn`}
            onClick={handleChangeLanguage}
            isActive={languageState === 'en'}
          />
        </div>
      </header>

      <SideMenu
        isActive={isMenuActiveState}
        animationType="slideLeft"
        style={{
          mainContainer: {
            backgroundColor: colorFieldByLocation.primaryColor,
            borderRightStyle: 'solid',
            borderRightWidth: 2,
            borderRightColor: colorFieldByLocation.secondaryColor,
          },
        }}>
        <NavigationMenuContent
          routes={setRoutes}
          colors={colorFieldByLocation}
          onMenuClose={handleChangeMenuState}
        />
      </SideMenu>
    </>
  );
});

Navigation.displayName = 'Navigation Component';

export default Navigation;
