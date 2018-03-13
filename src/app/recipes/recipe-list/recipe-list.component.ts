import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
 } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Cake',
      'This means this is a cake test!',
      'https://s.mijnreceptenboek.nl/i/lib/v/cake-special.png'
    ),
    new Recipe(
      'Pasta alle zucchine',
      'Pasta zucchine',
      'https://www.galbani.it/img_din/pastapesto_zucchine_small.jpg'
    ),
  ]



  onRecipeSelected(recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
