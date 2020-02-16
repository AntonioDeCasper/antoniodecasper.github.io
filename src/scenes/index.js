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
  LoaderOrbit,
} from '../components';

//Import SCENES
const HomePage = React.lazy(() => import('./Home'));
const AboutPage = React.lazy(() => import('./About'));
const ContactPage = React.lazy(() => import('./Contact'));
const PortfolioPage = React.lazy(() => import('./Portfolio'));

//Import STYLES
import './styles.css';

export const App = () => {
  let location = useLocation();
  const {pageTransition} = useTheme().variables;
  const {width} = useWindowDimension();
  const {colors} = useTheme();

  const [linkRouteOnHoverState, setLinkRouteOnHoverState] = useState<?string>(
    null,
  );
  const [transitionState, setTransitionState] = useState<boolean>(false);

  useEffect(() => {
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

  const handleOnEnterAnimation = () => {
    console.log('handleOnEnterAnimation');
    setTransitionState(true);
  };

  const handleOnExitedAnimation = () => {
    console.log('handleOnExitedAnimation');
    setTransitionState(false);
  };

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
              onEntering={handleOnEnterAnimation}
              onExited={handleOnExitedAnimation}
              key={location.key}
              timeout={pageTransition}
              classNames="switch-page">
              <>
                <Suspense
                  fallback={
                    <div className="page__loader">
                      <LoaderOrbit color={setColorsByRoute.secondaryColor} />
                    </div>
                  }>
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
              </>
            </CSSTransition>

            <PageTransition
              style={{
                backgroundColor: setColorsByRoute.primaryColor,
              }}
              isActive={transitionState}
              transitionDuration={500}
            />

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
