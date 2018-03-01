import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = 'No server created';
  serverName = '';

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
    if ( this.serverName != ''){
      this.createServerStatus = 'Server ' + this.serverName + ' created'!
    } else {
      this.createServerStatus = 'No server created';
    }
  }

}
