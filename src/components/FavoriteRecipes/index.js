import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Content from 'src/components/Content';
import Loading from 'src/components/App/Loading';

const FavoriteRecipes = ({ loading, recipes, getFavoriteRecipes }) => {
  useEffect(() => {
    getFavoriteRecipes();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <Content
        title="Recette favorites"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </div>

)};
FavoriteRecipes.propTypes = {
  getFavoriteRecipes: PropTypes.func,
  recipes: PropTypes.array,
};

FavoriteRecipes.defaultProps = {
  getFavoriteRecipes: () => {},
  recipes: [],

};

export default FavoriteRecipes;
