import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  resetForm(name, amount) {
    name.value = '';
    amount.value = '';
  }

  onAddIngredient(name, amount) {
	this.newIngredient.emit(
		new Ingredient(
			name.value, amount.value
		)
	);
    this.resetForm(name, amount);
  }

}
