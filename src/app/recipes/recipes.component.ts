import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Teast Recipe', 'Test description', 'url')
  ];
  constructor() { }

  ngOnInit() {
  }

}
