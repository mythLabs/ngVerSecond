import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
    new Recipe('A Teast Recipe', 'Test description', 'url')
  ];
  constructor() { }

  ngOnInit() {
  }

}
