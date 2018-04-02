import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shared/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //recipe : Observable<Recipe>;
  recipe :  Recipe ;
  id : number;

  constructor(
      private route: ActivatedRoute,
      private recipeService : RecipeService, 
      private shoppingService : ShoppingService  
  ) { }

  ngOnInit() {
     this.route.params.subscribe (
       (params: Params) => {
         this.id = + params['id'];
         this.recipe =  this.recipeService.getRecipe(this.id);
       }
     )
  }

  onAddShoppingList(){
     this.shoppingService.addIngredients(this.recipe.ingredients);
  }

}
