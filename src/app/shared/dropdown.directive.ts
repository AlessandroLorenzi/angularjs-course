import {
  Directive, 
  HostListener, 
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class dropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;

  }

  constructor() { }

}
