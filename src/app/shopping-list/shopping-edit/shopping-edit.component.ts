import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter,
  ViewChild,
  ElementRef
 } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('inputName') nameInputRef : ElementRef;
  @ViewChild('inputAmount') amountInputRef : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  resetForm() {
      this.nameInputRef.nativeElement.value = '';
      this.amountInputRef.nativeElement.value = '';
  }

  onAddIngredient() {
    if ( this.nameInputRef.nativeElement.value === '' ) {return;}
    if ( this.amountInputRef.nativeElement.value === '' ) {return;}
	this.newIngredient.emit (
		new Ingredient (
			this.nameInputRef.nativeElement.value, 
            this.amountInputRef.nativeElement.value
		)
	);
    this.resetForm();
  }

}
