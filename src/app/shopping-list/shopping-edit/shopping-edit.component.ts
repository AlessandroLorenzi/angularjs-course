import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/shopping.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shoppingService : ShoppingService ) { }

  ngOnInit() {
      this.subscription = this.shoppingService.startEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          console.debug(index);
        }
      );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  resetForm() {}

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient (
      value.name,
      value.amount
    );
    this.shoppingService.addIngredient(ingredient);
  }

}
