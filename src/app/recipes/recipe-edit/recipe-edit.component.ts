import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shared/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe; 

  constructor(
      private route: ActivatedRoute,
      private recipeService : RecipeService, 
      private shoppingService : ShoppingService  
  ) { }



  ngOnInit() {
     this.route.params.subscribe (
       (params: Params) => {
         this.id = + params['id'];
         this.editMode = params['id'] != null;
         this.recipe =  this.recipeService.getRecipe(this.id);
       }
     )
  }

  onSave(){
  }




}
