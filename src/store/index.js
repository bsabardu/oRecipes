import { createStore, applyMiddleware, compose } from 'redux';
import getRecipesMiddleware from 'src/middleware/getRecipes';
import authMiddleware from 'src/middleware/auth';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    getRecipesMiddleware,
    authMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
