import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.modal';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[];
  constructor(private recipe: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipe.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);
  // }
}
