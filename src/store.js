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

type InitialGlobalState = {
  +projectMenuState: {
    +isActive: boolean,
    +data: ?{[string]: any},
  },
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

const initialGlobalState: InitialGlobalState = {
  projectMenuState: {
    isActive: false,
    data: null,
  },
};

type Reducer = (
  InitialGlobalState,
  action: {[string]: any},
) => InitialGlobalState;

//Action types
const OPEN_PROJECT_MENU = 'OPEN_PROJECT_MENU';
const CLOSE_PROJECT_MENU = 'CLOSE_PROJECT_MENU';

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case OPEN_PROJECT_MENU:
      return {...state, projectMenuState: {isActive: true, data: action.data}};
    case CLOSE_PROJECT_MENU:
      return {
        ...state,
        projectMenuState: {...state.projectMenuState, isActive: false},
      };
    default:
      return state;
  }
};

const ThemeContext = React.createContext<Theme>(theme);
const WindowDimensionContext = React.createContext({
  width: undefined,
  height: undefined,
});
const GlobalStateContext = React.createContext(initialGlobalState);
const GlobalDispatchContext = React.createContext<({[string]: any}) => any>(
  () => 0,
);

const GlobalStateProvider = ({children}: Props) => {
  const [state, dispatch] = React.useReducer<InitialGlobalState, any>(
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

const useDispatch = () => {
  const dispatch = React.useContext(GlobalDispatchContext);

  const openProjectMenu = (data: {[string]: any}) => {
    dispatch({type: OPEN_PROJECT_MENU, data});
  };

  const closeProjectMenu = () => {
    dispatch({type: CLOSE_PROJECT_MENU});
  };

  return {openProjectMenu, closeProjectMenu};
};
const useGlobalState = () => React.useContext(GlobalStateContext);

const WindowDimensionProvider = ({children}: Props) => {
  const [dimension, setDimensionState] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
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

const Provider = ({children}: Props) => (
  <ThemeContext.Provider value={theme}>
    <WindowDimensionProvider>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </WindowDimensionProvider>
  </ThemeContext.Provider>
);

const useWindowDimension = () => React.useContext(WindowDimensionContext);
const useTheme = () => React.useContext(ThemeContext);

export {
  Provider,
  useWindowDimension,
  useTheme,
  useGlobalState,
  useDispatch,
  theme,
};
