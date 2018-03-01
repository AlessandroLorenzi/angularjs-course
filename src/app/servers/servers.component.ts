import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = 'No server created';

  constructor() {
    setTimeout (
      () => {
        this.allowNewServer = true;
      }, 2000
    );
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.createServerStatus = 'Server created'!
  }
}
