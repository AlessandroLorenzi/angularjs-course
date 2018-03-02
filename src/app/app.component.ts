import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  style: ['.blue {background-color: blue;}']
})
export class AppComponent {
  title = 'app';
  passwordVisible = false;
  timestamps = []
  counter = 0
  onDisplayDetails(){
    this.passwordVisible = true;

    this.timestamps.push({
      'date': Date.now(),
      'counter': this.counter
    });
    this.counter = this.counter +1 ;

  }

}
