// @flow
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Suspense,
} from 'react';
import {Switch, Route, useLocation, Redirect} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useTheme, useWindowDimension} from '../context';
import 'animate.css';
import 'normalize.css';

//Import COMPONENTS
import {
  NavigationView,
  Navigation,
  PageTransition,
  Ribbon,
  Loader,
} from '../components';

//Import SCENES
const HomePage = React.lazy(() => import('./Home'));
const AboutPage = React.lazy(() => import('./About'));
const ContactPage = React.lazy(() => import('./Contact'));
const PortfolioPage = React.lazy(() => import('./Portfolio'));

//Import STYLES
import './styles.css';

const App = () => {
  let location = useLocation();
  const {pageTransition} = useTheme().variables;
  const {width} = useWindowDimension();
  const {colors} = useTheme();

  const [linkRouteOnHoverState, setLinkRouteOnHoverState] = useState<?string>(
    null,
  );

  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', () => {
    //   console.log('FIRE: ', document);
    // });
    // return function clean() {
    //   document.removeEventListener('DOMContentLoaded', () => {
    //     console.log('removed');
    //   });
    // };
    // i18n.changeLanguage('ru');
    console.log('MOUNTED!!!');
    const element = document.getElementById('page-loader');

    if (element) {
      element.className = element.className.concat(' isDone');
    }
  }, []);

  const handleOnLinkHover = useCallback(route => {
    setLinkRouteOnHoverState(route);
  }, []);

  const checkRoutes = useMemo(() => {
    const acceptedRoutes = new Set(['/', '/about', '/portfolio', '/contact']);

    return acceptedRoutes.has(location.pathname);
  }, [location.pathname]);

  const setColorsByRoute = useMemo(
    () =>
      colors[
        location.pathname.split('/')[1]
          ? location.pathname.split('/')[1]
          : 'home'
      ],
    [location.pathname, colors],
  );

  console.log('%cRender App', 'color: green');

  return (
    <Route
      render={({location}) => {
        if (!checkRoutes) {
          return <Redirect to="/" />;
        }

        return (
          <TransitionGroup
            style={{
              backgroundColor: setColorsByRoute.primaryColor,
              transitionDelay: `${pageTransition}ms`,
            }}
            className="page">
            <Navigation location={location} onLinkHover={handleOnLinkHover} />

            <CSSTransition
              //in={isAnimationActive}
              key={location.key}
              timeout={pageTransition}
              classNames="switch-page">
              <>
                <Suspense
                  fallback={<Loader color={setColorsByRoute.secondaryColor} />}>
                  <Switch location={location}>
                    <Route path="/about">
                      <AboutPage />
                    </Route>

                    <Route path="/contact">
                      <ContactPage />
                    </Route>

                    <Route path="/portfolio">
                      <PortfolioPage />
                    </Route>

                    <Route path="/">
                      <HomePage />
                    </Route>
                  </Switch>
                </Suspense>

                <PageTransition
                  style={{
                    backgroundColor: setColorsByRoute.primaryColor,
                  }}
                />
              </>
            </CSSTransition>

            <Ribbon
              className={`animated ${
                width ? (width > 768 ? 'rotateInDownLeft' : 'slideInUp') : ''
              } `}
              text="in development"
            />

            <NavigationView
              route={
                linkRouteOnHoverState !== location.pathname
                  ? linkRouteOnHoverState
                  : null
              }
            />
          </TransitionGroup>
        );
      }}
    />
  );
};

export default App;
