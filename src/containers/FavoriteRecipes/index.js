import { connect } from 'react-redux';
import FavoritesRecipes from 'src/components/FavoriteRecipes';
import { getFavoriteRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes.favorites.favorites,
  loading: state.recipes.favLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteRecipes: (token) => dispatch(getFavoriteRecipes(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesRecipes);
