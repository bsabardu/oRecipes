import {
  SET_RECIPES,
  SET_RECIPE_LOADING_STATE,
  SET_FAV_LOADING_STATE,
  SET_FAVORITE_RECIPES,

} from 'src/actions/recipes';

export const initialState = {
  list: [],
  favorites: [],
  loading: true,
  favLoading: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    case SET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.recipes,
      };
    case SET_RECIPE_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_FAV_LOADING_STATE:
      return {
        ...state,
        favLoading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
