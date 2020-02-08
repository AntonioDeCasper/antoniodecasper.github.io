//@flow
import React, {memo, useState, useEffect} from 'react';
import {useTheme} from '../../context';
import {useTranslation} from 'react-i18next';
import capitalize from 'lodash/capitalize';

//Import COMPONENTS
import {TextCircle} from '../';

//Import ICONS
import {GiBriefcase} from 'react-icons/gi';
import {IoIosPerson} from 'react-icons/io';
import {GoMail, GoHome} from 'react-icons/go';

// Import STYLES
import './styles.css';

type Props = {|className?: string, route: ?string|};
type ConfiguratioType = {|
  backgroundColor: string,
  icon: ?React$Element<'svg'>,
  headerRotate: number,
|};

const RADIUS = 250;

export const NavigationView = memo<Props>(({className, route}) => {
  const classNames = [
    'navigation-view',
    route ? 'isActive' : '',
    className,
  ].join(' ');
  const {colors} = useTheme();
  const {t} = useTranslation('routes');

  const [
    configurationState,
    setConfigurationState,
  ] = useState<ConfiguratioType>({
    backgroundColor: 'transparent',
    icon: null,
    headerRotate: 0,
  });

  const styles = {
    navigationViewStyle: {
      backgroundColor: configurationState.backgroundColor,
      width: RADIUS * 2,
      height: RADIUS * 2,
      right: route ? -RADIUS : -RADIUS * 2,
      bottom: route ? -RADIUS : -RADIUS * 2,
    },
  };

  useEffect(() => {
    const calcConfiguration = () => {
      const styles = {
        homeIcon: {
          marginLeft: -150,
          marginTop: -140,
        },
        aboutIcon: {
          marginLeft: -155,
          marginTop: -150,
        },
        portfolioIcon: {
          marginLeft: -153,
          marginTop: -140,
        },
        contactIcon: {
          marginLeft: -145,
          marginTop: -126,
        },
      };

      if (route === '/') {
        return {
          backgroundColor: colors.home.primaryColor,
          icon: (
            <GoHome
              style={styles.homeIcon}
              className="navigation-view__icon"
              size={130}
            />
          ),
          headerRotate: 298,
        };
      }

      if (route === '/about') {
        return {
          backgroundColor: colors.about.primaryColor,
          icon: (
            <IoIosPerson
              style={styles.aboutIcon}
              className="navigation-view__icon"
              size={150}
              color={colors.about.textColor}
            />
          ),
          headerRotate: 294,
        };
      }

      if (route === '/portfolio') {
        return {
          backgroundColor: colors.portfolio.primaryColor,
          icon: (
            <GiBriefcase
              style={styles.portfolioIcon}
              className="navigation-view__icon"
              size={150}
            />
          ),
          headerRotate: 281,
        };
      }

      if (route === '/contact') {
        return {
          backgroundColor: colors.contact.primaryColor,
          icon: (
            <GoMail
              style={styles.contactIcon}
              className="navigation-view__icon"
              size={130}
            />
          ),
          headerRotate: 286,
        };
      }

      return {
        backgroundColor: 'transparent',
        icon: null,
        headerRotate: 0,
      };
    };

    setConfigurationState(calcConfiguration());
  }, [route, colors]);

  return (
    <div style={styles.navigationViewStyle} className={classNames}>
      <div className="navigation-view__circle">
        <TextCircle
          options={{
            radius: RADIUS,
            marginCircle: (RADIUS * 7) / 100,
            rotate: configurationState.headerRotate,
            letterSpacing: 8,
            textColor:
              colors[
                route
                  ? route.split('/')[1]
                    ? route.split('/')[1]
                    : 'home'
                  : 'default'
              ].textColor,
          }}
          startAnimation={route}
          text={
            route
              ? route.split('/')[1]
                ? t(capitalize(route.split('/')[1]))
                : t('Home')
              : ''
          }
          className="navigation-view__circle-text"
        />
      </div>

      {configurationState.icon}
    </div>
  );
});

NavigationView.displayName = 'NavigationView';
