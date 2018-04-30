import {
  Component,
  OnInit,
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService : ShoppingService ) { }

  ngOnInit() {}

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
