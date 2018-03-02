import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  serverId = 10;

  getServerStatus(){
    return this.serverStatus;
  }
  getServerStatusColor(){
     return this.serverStatus === 'online' ? 'lightgreen' : 'pink' ;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

}
