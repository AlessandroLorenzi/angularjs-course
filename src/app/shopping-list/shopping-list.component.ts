import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private ingSubscription : Subscription;

  constructor( private shoppingService : ShoppingService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingSubscription = this.shoppingService.ingredientsChanged.subscribe(
		( ingredients : Ingredient[] ) => {
        this.ingredients = ingredients;
      }
	  )
  }
  ngOnDestroy () {
    this.ingSubscription.unsubscribe();
  }
  onEditItem(index:number){
    this.shoppingService.startEditing.next(index);
  }

}
