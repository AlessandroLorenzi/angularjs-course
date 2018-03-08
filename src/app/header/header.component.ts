import { Component,
         OnInit,
         Output,
         EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() section = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  showSection(section){
    this.section.emit(section)
  }
}
