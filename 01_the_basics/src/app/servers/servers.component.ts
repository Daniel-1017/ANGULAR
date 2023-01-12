import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // assignment 2
  username = '';
  // ---

  // assignment 3
  clicks: number[] = [];
  passwordIsVisible = false;
  // ---

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // assignment 3
  onTogglePassword() {
    this.clicks.push(this.clicks.length + 1);
    this.passwordIsVisible = !this.passwordIsVisible;
  }
  // ---
}
