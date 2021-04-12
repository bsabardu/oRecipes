import { expect } from 'chai';
import recipesReducer, { initialState } from 'src/reducers/recipes';
import { setRecipes } from 'src/actions/recipes';

describe('reducer for recipes', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(recipesReducer).to.be.a('function');
    })

    it('should return an object', () => {
      expect(recipesReducer()).to.be.an('object');
    })

    it('should return initial state', () => {
      expect(recipesReducer()).to.equal(initialState);
    })
  })

  // Execution with action
  describe('with actions', () => {
    it('should return a modifed state when receive SET_RECIPES actions', () => {
      const recipes = [{ title : 'Recette 1'}, { title : 'Recette 2'}];
      const action = setRecipes(recipes);
      const modifiedState = recipesReducer(initialState, action);
      //On compare l'object de façon profonde
      const expectedState = {
        ...initialState,
        list: recipes,
      }
      expect(modifiedState).to.be.eql(expectedState);
    })
  })
})
