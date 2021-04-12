import api from 'src/api';

import { SUBMIT_LOGIN, login } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      // store.dispatch(setLoadingState(true));
      api.post('/login', {
        email,
        password,
      }).then((result) => result.data)
        .then(({ pseudo, token }) => {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          store.dispatch(login(pseudo, token));
        })
        .finally(() => {
          // store.dispatch(setLoadingState(false));
        });
      return next(action);
    }

    default:
      return next(action);
  }
};
