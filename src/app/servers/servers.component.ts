import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = 'No server created';
  serverName = '';
  serverCreated = false;

  servers = ['first', 'second']

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
      this.servers.push(this.serverName)
      this.serverCreated = true;
  }



}
