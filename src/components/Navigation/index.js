//@flow
import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../store';

//Import COMPONENTS
import NavigationLink from './components/NavigationLink';
import ButtonInline from '../ButtonInline';

//Import STYLES
import './styles.css';

type Props = {|onLinkHover: (?string) => void, location: Object|};

const Navigation = memo<Props>(({onLinkHover, location}) => {
  const {t, i18n} = useTranslation('routes');
  const {colors} = useContext(ThemeContext);
  const colorFieldByLocation =
    colors[
      location.pathname.split('/')[1] ? location.pathname.split('/')[1] : 'home'
    ];

  const [languageState, setLanguageState] = useState<string>(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(languageState);
  }, [languageState]);

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
    <header className="navigation">
      <div className="navigation__item"></div>

      <div className="navigation__item">
        {React.Children.toArray(
          setRoutes.map((route, i) => (
            /* eslint react/jsx-key: "off" */
            <NavigationLink
              style={{
                color: colorFieldByLocation.textColor,
                hoverColor: colorFieldByLocation.secondaryColor,
              }}
              exact
              to={route.path}
              text={route.name}
              activeClassName="isActive"
              onMouseEnter={() => handleLinkHover(route.path)}
              onMouseLeave={() => handleLinkHover(null)}
              className={`btn-inline_active_double`}
              classNameLink={`animated zoomIn navigation__links navigation_delay_${i} ${
                i === setRoutes.length - 1 ? 'navigation__links-last' : ''
              }`}
            />
          )),
        )}
      </div>

      <div className="navigation__item">
        <ButtonInline
          style={{
            color: colorFieldByLocation.textColor,
            hoverColor: colorFieldByLocation.secondaryColor,
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
          }}
          text="en"
          className={`animated zoomIn navigation_delay_5 navigation__lng-btn`}
          onClick={handleChangeLanguage}
          isActive={languageState === 'en'}
        />
      </div>
    </header>
  );
});

Navigation.displayName = 'Navigation Component';

export default Navigation;
