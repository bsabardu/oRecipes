import { connect } from 'react-redux';
import App from 'src/components/App';
import { getRecipes } from 'src/actions/recipes';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
