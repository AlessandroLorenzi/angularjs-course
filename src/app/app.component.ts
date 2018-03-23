import { Component } from '@angular/core';
import { ShoppingService } from './shared/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ShoppingService]
})
export class AppComponent {
  title = 'app';
  section = 'recipes';


  constructor( private shoppingService : ShoppingService ) { }

  onChangeSection(event){
    this.section = event;
  }
}
