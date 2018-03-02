import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online {color: white;}']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = '';
  getServerStatus(){
    return this.serverStatus;
  }
  getServerStatusColor(){
     return this.serverStatus === 'online' ? 'green' : 'pink' ;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

}
