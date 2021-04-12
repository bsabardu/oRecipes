import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
// Import scroll to top Hook
import ScrollToTop from 'src/hooks/ScrollToTop';
import { useDispatch } from 'react-redux';
import { getRecipes } from 'src/actions/recipes';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading, recipes }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);


  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <ScrollToTop />
      <Switch>
        <Route path="/recipe/:slug">
          <Recipe recipes={recipes} />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  recipes: PropTypes.array,
};

App.defaultProps = {
  loading: false,
  recipes: [],
};

export default App;
