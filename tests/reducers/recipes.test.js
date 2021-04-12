// On test :
// - La structure comme on l'a fait pour le reducer
// - On test un retour basique
// - On teste l'execution
//   - Un cas qui fait planter la fonction mais du coups qui passe le test
//   - Au moins 2 cas bien différents qui font passer le test

// Ref la doc de Chai
// https://www.chaijs.com/api/bdd/



import { expect } from 'chai';
import { findRecipe, getTitleFromRecipiesNumber } from 'src/selectors/recipes';

describe('selector for recipes', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(findRecipe).to.be.a('function');
    })
  })

  // Execution with recipes
  describe('findRecipes', () => {
    const recipe1 = { title : 'Recette 1', slug: 'slug1'};
    const recipe2 = { title : 'Recette 2', slug: 'slug2'};
    const recipesArray = [recipe1, recipe2];


    it('should return an object', () => {
      expect(findRecipe(recipesArray, 'slug1')).to.be.an('object');
    })

    it('should find a recipe with the same slug', () => {
      // On test sur la recette trouvée est bien la recette 1;
      expect(findRecipe(recipesArray,'slug1')).to.be.eql(recipe1);
    })
    
    it('should return undefined if not found', () => {
      // On test undefined si pas de recipe trouvé
      expect(findRecipe(recipesArray,'slug3')).to.be.undefined;
    })

    // Doit lancer une exception si jamias les paramètres ne sont pas envoyés
    it('should throw error if has no parameter', () => {
      // Dans le cas de to.trhouw on oublie pas de mettre la fonction findRecipde dans un callback de expect sinon l'exception n'est pas capturée
      expect(() => findRecipe()).to.throw(/recipes parameter is not an array/);
    })

  })

  describe('#getTitleOfRecipes', () => {

    describe('structure', () => {
        
        it('should be a function', () => {
          expect(getTitleFromRecipiesNumber).to.be.a('function');
        })

        it('should return a string', () => {
          expect(getTitleFromRecipiesNumber()).to.be.a('string');
        })

      })

      describe('execution', () => {
        
        it('it should return "Recette à venir. Revenez bientôt" when 0 recipes givent', () => {
          expect(getTitleFromRecipiesNumber(0)).to.be.equal('Recette à venir. Revenez bientôt');
        })

        it('it should return "Découvrez notre recette" when 1 recipe given', () => {
          expect(getTitleFromRecipiesNumber(1)).to.be.equal('Découvrez notre recette');
        })

        it('it should return "Découvrez nos recettes" when more than 1 recipes given', () => {
          expect(getTitleFromRecipiesNumber(2)).to.be.equal('Découvrez nos recettes');
        })
      })
  })

})

