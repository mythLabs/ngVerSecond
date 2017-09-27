import {Recipe} from './recipe.modal';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Teast Recipe 1', 'Test description 1', 'url'),
        new Recipe('Teast Recipe 2', 'Test description 2', 'url'),
        new Recipe('Teast Recipe 3', 'Test description 3', 'url'),
        new Recipe('Teast Recipe 4', 'Test description 4', 'url')
      ];


      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }
}
