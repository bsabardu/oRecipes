/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Loading from '../App/Loading';

// == Import : api
import api from 'src/api';

// Style
import './style.scss';

// == Composant
function Recipe({ recipe, loading, match }) {
  if (loading) {
    return <Loading />;
  }
  if (!recipe) {
    return <Redirect to="/error" />;
  }
  const [recipeData, setRecipeData] = useState(recipe);
  useEffect(() => {
    const { slug } = match.params;
    
  })
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

Recipe.propTypes = {
  loading: PropTypes.bool,
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }),
};

Recipe.defaultProps = {
  loading: true,
  recipe: null,
};

// == Export
export default Recipe;
