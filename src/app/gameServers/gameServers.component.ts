import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameServers',
  templateUrl: './gameServers.component.html',
  styleUrls: ['./gameServers.component.css']
})
export class GameServersComponent implements OnInit {

  gameServers = [
    'United States (US)',
    'Europe (EU)',
    'Asia-Pacific (APAC)'
  ];

  constructor() { }

  ngOnInit() {

  }

}
