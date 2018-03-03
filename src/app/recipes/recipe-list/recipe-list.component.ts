import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recepie', 
      'This means this is a cake test!',
      'https://www.nexternal.com/wttc/images/Bday_choc_sm_0890w.jpg'
    )
  ]

  constructor() { }

  ngOnInit() {
  }

}
