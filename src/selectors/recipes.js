/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  if (!Array.isArray(recipes)) {
    throw new Error('recipes parameter is not an array');
  }
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function getTitleFromRecipiesNumber(nbRecipes) {
  let title = '';
  if (nbRecipes === 0 || !nbRecipes ) {
    title = 'Recette à venir. Revenez bientôt';
  }
  else if (nbRecipes === 1) {
    title = 'Découvrez notre recette';
  }
  else if (nbRecipes > 1) {
    title = 'Découvrez nos recettes';
  }
  return title;
}
