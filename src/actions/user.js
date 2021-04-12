// Actions types
export const SET_INPUT_LOGIN_CONTENT = 'SET_INPUT_LOGIN_CONTENT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_PSEUDO = 'SET_PSEUDO';
export const SET_LOGGED = 'SET_LOGGED';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const CLEAR_LOGIN_FIELDS = 'CLEAR_LOGIN_FIELDS';

// Action creator
export const updateInputLoginContent = (name, value) => ({
  type: SET_INPUT_LOGIN_CONTENT,
  name,
  value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const setLogged = (logged) => ({
  type: SET_LOGGED,
  logged,
});

export const login = (pseudo, token) => ({
  type: LOGIN,
  pseudo,
  token,
});

export const logout = (pseudo, token) => ({
  type: LOGOUT,
});

export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

export const clearLoginFields = () => ({
  type: CLEAR_LOGIN_FIELDS,
});
