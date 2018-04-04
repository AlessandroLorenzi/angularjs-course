import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe(
      'A Test Cake',
      'This means this is a cake test!',
      'https://s.mijnreceptenboek.nl/i/lib/v/cake-special.png',
      [
         new Ingredient('egg', 4),
         new Ingredient('butter', 200),
	  ]
    ),
    new Recipe(
      'Pasta alle zucchine',
      'Pasta zucchine',
      'https://www.galbani.it/img_din/pastapesto_zucchine_small.jpg',
      [
         new Ingredient('pasta', 100),
         new Ingredient('zucchine', 2),
	  ]
    ),
  ]
  
  constructor() { }
  
  public getRecipes () {
    return this.recipes.slice();
  }
  public getRecipe (id: number) {
    return this.recipes.slice(id, id+1)[0];
  }

}
