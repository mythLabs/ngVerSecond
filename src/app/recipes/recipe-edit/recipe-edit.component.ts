import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode= false;
  recipeFrom: FormGroup;

  constructor(public route: ActivatedRoute, private recipeService: RecipeService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
               this.id = params['id'];
               this.editMode = params['id'] != null ;
               this.initForm();
      }
    );
  }

  private initForm() {
     let recipeName = '';
     let recipeImagePath = '';
     let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
         recipeName = recipe.name;
         recipeImagePath = recipe.imagePath;
         recipeDescription = recipe.description;
    }

       this.recipeFrom = new FormGroup({
            'name' : new FormControl(recipeName),
            'imagePath' : new FormControl(recipeImagePath),
            'description' : new FormControl(recipeDescription)
       });
  }

}
