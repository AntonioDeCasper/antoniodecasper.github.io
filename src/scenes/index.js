// @flow
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Switch, Route, useLocation, Redirect} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useTheme, useWindowDimension} from '../store';
import 'animate.css';
import 'normalize.css';

//Import COMPONENTS
import {
  NavigationView,
  Navigation,
  PageTransition,
  Ribbon,
} from '../components';

//Import SCENES
import HomePage from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import PortfolioPage from './Portfolio';

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
  }, []);

  const handleOnLinkHover = useCallback(route => {
    setLinkRouteOnHoverState(route);
  }, []);

  console.log('%cRender App', 'color: green');

  const checkRoutes = useMemo(() => {
    const acceptedRoutes = new Set(['/', '/about', '/portfolio', '/contact']);

    return acceptedRoutes.has(location.pathname);
  }, [location.pathname]);

  return (
    <Route
      render={({location}) => {
        if (!checkRoutes) {
          return <Redirect to="/" />;
        }

        return (
          <TransitionGroup className="page">
            <Navigation location={location} onLinkHover={handleOnLinkHover} />

            <CSSTransition
              //in={isAnimationActive}
              key={location.key}
              timeout={pageTransition}
              classNames="switch-page">
              <>
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

                <PageTransition
                  style={{
                    backgroundColor:
                      colors[
                        location.pathname.split('/')[1]
                          ? location.pathname.split('/')[1]
                          : 'home'
                      ].primaryColor,
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
