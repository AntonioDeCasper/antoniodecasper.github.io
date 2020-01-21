//@flow
import * as React from 'react';

type Theme = {
  colors: {
    [string]: {
      primaryColor: string,
      secondaryColor: string,
      textColor: string,
    },
  },
  variables: {
    pageTransition: number,
  },
};

type Props = {
  children: React.Node,
};

const theme = {
  colors: {
    home: {
      primaryColor: '#212121',
      secondaryColor: '#fbc02d',
      textColor: '#fff',
    },
    about: {
      primaryColor: '#fff',
      secondaryColor: '#4a148c',
      textColor: '#000',
    },
    portfolio: {
      primaryColor: '#2980b9',
      secondaryColor: '#fbc02d',
      textColor: '#fff',
    },
    contact: {
      primaryColor: '#263238',
      secondaryColor: '#fbc02d',
      textColor: '#fff',
    },
    default: {
      primaryColor: '#212121',
      secondaryColor: '#fbc02d',
      textColor: '#fff',
    },
  },
  variables: {
    pageTransition: 500,
  },
};

const ThemeContext = React.createContext<Theme>(theme);

const Provider = ({children}: Props) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export {Provider, ThemeContext, theme};
