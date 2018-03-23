import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shared/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;

  constructor(
      private recipeService : RecipeService, 
      private shoppingService : ShoppingService  
  ) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
		(recipeSelected: Recipe) => 
          { this.recipe = recipeSelected; }
    );
  }

  onAddShoppingList(){
     this.shoppingService.addIngredients(this.recipe.ingredients);
  }

}
