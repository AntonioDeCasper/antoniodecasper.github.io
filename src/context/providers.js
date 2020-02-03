//@flow
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from 'react';
import {initialGlobalState, reducer} from './reducers';

//Import TYPES
import type {InitialGlobalState} from './reducers';

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
  children: React$Node,
};

//WindowDimensionContext
const WindowDimensionContext = createContext({
  width: undefined,
  height: undefined,
});

const WindowDimensionProvider = ({children}: Props) => {
  const [dimension, setDimensionState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setDimensionState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <WindowDimensionContext.Provider value={dimension}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

const useWindowDimension = () => useContext(WindowDimensionContext);

//ThemeContext
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

const ThemeContext = createContext<Theme>(theme);

const useTheme = () => useContext(ThemeContext);

//GlobalStateContext
const GlobalStateContext = createContext(initialGlobalState);
const GlobalDispatchContext = createContext<({[string]: any}) => any>(() => 0);

const GlobalStateProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer<InitialGlobalState, any>(
    reducer,
    initialGlobalState,
  );

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => useContext(GlobalStateContext);

//Main Provider
const Provider = ({children}: Props) => (
  <ThemeContext.Provider value={theme}>
    <WindowDimensionProvider>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </WindowDimensionProvider>
  </ThemeContext.Provider>
);

export {
  Provider,
  useTheme,
  useWindowDimension,
  useGlobalState,
  GlobalDispatchContext,
};
