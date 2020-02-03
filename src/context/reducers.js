//@flow
import {useContext} from 'react';
import {GlobalDispatchContext} from './providers';

type Reducer = (
  InitialGlobalState,
  action: {[string]: any},
) => InitialGlobalState;

export type InitialGlobalState = {
  +projectMenuState: {
    +isActive: boolean,
    +data: ?{[string]: any},
  },
};

//Global State
const initialGlobalState: InitialGlobalState = {
  projectMenuState: {
    isActive: false,
    data: null,
  },
};

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

const useDispatch = () => {
  const dispatch = useContext(GlobalDispatchContext);

  const openProjectMenu = (data: {[string]: any}) => {
    dispatch({type: OPEN_PROJECT_MENU, data});
  };

  const closeProjectMenu = () => {
    dispatch({type: CLOSE_PROJECT_MENU});
  };

  return {openProjectMenu, closeProjectMenu};
};

export {reducer, initialGlobalState, useDispatch};
