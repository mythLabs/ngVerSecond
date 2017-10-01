import { Ingredient } from './../shared/ingredient.modal';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShoppingListService} from './Shoppling-list.service';





@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients; });
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
     }
}
