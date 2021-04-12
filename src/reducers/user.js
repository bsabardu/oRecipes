import {
  SET_INPUT_LOGIN_CONTENT,
  SET_PSEUDO,
  LOGIN,
  LOGOUT,
  SET_LOGGED,
  CLEAR_LOGIN_FIELDS,
} from 'src/actions/user';

export const initialState = {
  logged: false,
  pseudo: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_LOGIN_CONTENT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };
    case SET_LOGGED:
      return {
        ...state,
        logged: action.logged,
      };
    case CLEAR_LOGIN_FIELDS:
      return {
        ...state,
        email: '',
        password: '',
      };
    case LOGIN:
      return {
        ...state,
        pseudo: action.pseudo,
        token: action.token,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        pseudo: '',
        token: '',
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
