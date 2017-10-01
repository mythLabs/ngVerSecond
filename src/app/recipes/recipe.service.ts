import { ShoppingListService } from './../shopping-list/Shoppling-list.service';
import { Ingredient } from './../shared/ingredient.modal';
import {Recipe} from './recipe.modal';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {
  }

  recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'Test description 1', 'url', [
                 new Ingredient ('ingredientR1 1', 3),
                 new Ingredient ('ingredientR1 2', 5)
        ]),
        new Recipe('Test Recipe 2', 'Test description 2', 'url', [
          new Ingredient ('ingredientR2 1', 5)
        ]),
        new Recipe('Test Recipe 3', 'Test description 3', 'url', [
          new Ingredient ('ingredientR3 1', 5),
          new Ingredient ('ingredientR3 2', 15),
          new Ingredient ('ingredientR3 3', 89)
        ]),
        new Recipe('Test Recipe 4', 'Test description 4', 'url', [
          new Ingredient ('ingredientR4 1', 105)
        ])
      ];


      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
               this.slService.addIngredients(ingredients);
      }
}
