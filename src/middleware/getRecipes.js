import api from 'src/api';

import { GET_RECIPES, GET_FAVORITE_RECIPES, setFavoriteRecipes, setRecipes, setRecipeLoadingState, setFavLoadingState } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES: {
      store.dispatch(setRecipeLoadingState(true));
      api.get('/recipes')
        .then((result) => result.data)
        .then((recipes) => {
          store.dispatch(setRecipes(recipes));
        })
        .finally(() => {
          store.dispatch(setRecipeLoadingState(false));
        });
      return next(action);
    }
    case GET_FAVORITE_RECIPES: {
      store.dispatch(setFavLoadingState(true));
      api.get('/favorites')
        .then((result) => result.data)
        .then((favorites) => {
          store.dispatch(setFavoriteRecipes(favorites));
        })
        .finally(() => {
          store.dispatch(setFavLoadingState(false));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
