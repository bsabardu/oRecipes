import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Loading from 'src/components/App/Loading';
import { getTitleFromRecipiesNumber } from 'src/selectors/recipes';
import FavoriteRecipes from 'src/containers/FavoriteRecipes';

const Home = ({
  recipes, loading, isLogged,
}) => (
  <Page>
    <AppHeader />
    {loading ? <Loading />
      : (
        <>
          {isLogged && <FavoriteRecipes />}
          <Content
            title={getTitleFromRecipiesNumber(recipes.length)}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
            recipes={recipes}
          />
        </>
      )}
  </Page>
);

Home.propTypes = {
  getFavoriteRecipes: PropTypes.func,
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  isLogged: PropTypes.bool,
  token: PropTypes.string,
};

Home.defaultProps = {
  getFavoriteRecipes: () => {},
  loading: true,
  isLogged: false,
  token: '',
};

export default Home;
