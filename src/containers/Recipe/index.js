import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { withRouter } from 'react-router';
// == Import Selector
import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return ({
    recipe: findRecipe(state.recipes.list, slug),
    loading: state.recipes.loading,
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
