/* @flow */
import React, {memo, useState, useEffect, useCallback, useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../context';

//Import COMPONENTS
import {NavigationMenuContent} from './components/NavigationMenuContent';
import {ButtonBurger, ButtonInline, SideMenu, Logo} from '../';

//Import STYLES
import './styles.css';

type Props = {|onLinkHover: (?string) => void, location: Object|};

export const Navigation = memo<Props>(({onLinkHover, location}) => {
  const {colors} = useTheme();
  const {t, i18n} = useTranslation('routes');
  const colorFieldByLocation =
    colors[
      location.pathname.split('/')[1] ? location.pathname.split('/')[1] : 'home'
    ];
  const history = useHistory();

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

  const handleChangeMenuState = useCallback(state => {
    setIsMenuActiveState(state);
  }, []);

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

  const handleRouteOnClick = route => {
    history.push(route.path);
  };

  console.log('%cRender Navigation', 'color: green');

  return (
    <>
      <header
        style={{
          borderColor: colorFieldByLocation.secondaryColor,
        }}
        className="navigation">
        <div className="navigation__item navigation__burger-item">
          <Logo textColor={colorFieldByLocation.textColor} />

          <ButtonBurger
            onStateChanged={handleChangeMenuState}
            color={colorFieldByLocation.secondaryColor}
            state={isMenuActiveState}
          />
        </div>

        <nav className="navigation__item">
          {React.Children.toArray(
            setRoutes.map((route, i) => (
              /* eslint react/jsx-key: "off" */
              <ButtonInline
                style={{
                  color: colorFieldByLocation.textColor,
                  activeColor: colorFieldByLocation.secondaryColor,
                  hoverColor: colorFieldByLocation.secondaryColor,
                }}
                text={route.name}
                isActive={location.pathname === route.path}
                className={`btn-inline_active_double animated zoomIn navigation__link navigation_delay_${i}`}
                onMouseEnter={() => handleLinkHover(route.path)}
                onMouseLeave={() => handleLinkHover(null)}
                onClick={() => handleRouteOnClick(route)}
              />
            )),
          )}
        </nav>

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
        }}
        className="navigation__side-menu">
        <NavigationMenuContent
          routes={setRoutes}
          colors={colorFieldByLocation}
          onMenuClose={handleChangeMenuState}
          onLinkClick={handleRouteOnClick}
        />
      </SideMenu>
    </>
  );
});

Navigation.displayName = 'Navigation Component';
