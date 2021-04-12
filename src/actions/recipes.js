// Actions types
export const GET_RECIPES = 'GET_RECIPES';
export const GET_ONE_RECIPE = 'GET_ONE_RECIPE';
export const GET_FAVORITE_RECIPES = 'GET_FAVORITE_RECIPES';
export const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_RECIPE_LOADING_STATE = 'SET_RECIPE_LOADING_STATE';
export const SET_FAV_LOADING_STATE = 'SET_FAV_LOADING_STATE';

// Actions creators
export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});

export const setRecipeLoadingState = (loading) => ({
  type: SET_RECIPE_LOADING_STATE,
  loading,
});

export const setFavLoadingState = (loading) => ({
  type: SET_FAV_LOADING_STATE,
  loading,
});

export const getFavoriteRecipes = (token) => ({
  type: GET_FAVORITE_RECIPES,
  token,
});

export const setFavoriteRecipes = (recipes) => ({
  type: SET_FAVORITE_RECIPES,
  recipes,
});
