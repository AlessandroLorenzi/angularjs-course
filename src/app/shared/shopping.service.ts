import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';



export class ShoppingService {
  public ingredientsChanged = new Subject<Ingredient[]>()

  public ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('shugar', 150),
  ];
 
  constructor() { }

  public getIngredients() {
    return this.ingredients.slice();
  }
  
  public addIngredient(ingredient : Ingredient){
	this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  public addIngredients(ingredients : Ingredient[]){
	this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }



}