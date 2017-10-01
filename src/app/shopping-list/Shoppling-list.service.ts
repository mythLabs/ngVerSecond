import {Ingredient} from '../shared/ingredient.modal';
 import { Injectable, EventEmitter } from '@angular/core';
 import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        //   for (let ingredient of ingredients) {
        //       this.ingredients.push(ingredient);
        //   }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      getIngredient(index: number) {
          return this.ingredients[index];
      }

      updateIngredient(index: number, ingredient: Ingredient) {
          this.ingredients[index] = ingredient;
          this.ingredientChanged.emit(this.ingredients.slice());
      }

      deleteIngredient (index: number) {
          this.ingredients.splice(index, 1);
          this.ingredientChanged.emit(this.ingredients.slice());
      }
 }
