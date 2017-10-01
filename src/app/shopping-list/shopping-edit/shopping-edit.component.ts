import { ShoppingListService } from './../Shoppling-list.service';
import { Component, OnInit, OnDestroy , ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.modal';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
//  @ViewChild('nameInput') nameInputRef: ElementRef;
//  @ViewChild('amountInput') amountInputRef: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
       this.editedItemIndex = index;
       this.editMode = true;
       this.editedItem = this.slService.getIngredient(index);
       this.slForm.setValue({
         name: this.editedItem.name,
         amount: this.editedItem.amount
       });
    });
  }

   onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
         this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.ingredientAdded.emit(newIngredient);
   }

     ngOnDestroy () {
       this.subscription.unsubscribe();
     }

     onClear() {
       this.slForm.reset();
       this.editMode = false;
     }

     onDelete() {
       this.onClear();
      this.slService.deleteIngredient(this.editedItemIndex);
     }
}
