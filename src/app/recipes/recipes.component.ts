import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected : Recipe;
  constructor( 
    private recipeService : RecipeService,
    private shoppingService : ShoppingService,
  ) { }

  ngOnInit() {
  }

}
