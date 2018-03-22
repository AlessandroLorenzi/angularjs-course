import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
		(recipeSelected: Recipe) => 
          { this.recipe = recipeSelected; }
    );
  }

}
