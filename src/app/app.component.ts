import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.white {color: white;}']
})
export class AppComponent {
  title = 'app';
  passwordVisible = false;
  timestamps = []
  counter = 0
  getDateColor(counter){
    return counter >= 5 ? 'blue' : 'white'
  }
  onDisplayDetails(){
    this.passwordVisible = !(this.passwordVisible);
    this.timestamps.push({
      'date': Date.now(),
      'counter': this.counter
    });
    this.counter = this.counter +1 ;
  }

}
