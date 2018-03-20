import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter,
  ViewChild,
  ElementRef
 } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef : ElementRef;
  @ViewChild('inputAmount') amountInputRef : ElementRef;

  constructor(private shoppingService : ShoppingService ) { }

  ngOnInit() {
  }

  resetForm() {
      this.nameInputRef.nativeElement.value = '';
      this.amountInputRef.nativeElement.value = '';
  }

  onAddIngredient() {
    if ( this.nameInputRef.nativeElement.value === '' ) {return;}
    if ( this.amountInputRef.nativeElement.value === '' ) {return;}
	this.shoppingService.addIngredient (
		new Ingredient (
			this.nameInputRef.nativeElement.value, 
            this.amountInputRef.nativeElement.value
		)
	);
    this.resetForm();
  }

}
