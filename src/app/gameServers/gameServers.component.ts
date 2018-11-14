import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gameServers',
  templateUrl: './gameServers.component.html',
  styleUrls: ['./gameServers.component.css']
})
export class GameServersComponent implements OnInit {

  ipUrl = 'https://jsonip.com';

  gameServers = [
    'United States (US)',
    'Europe (EU)',
    'Asia-Pacific (APAC)'
  ];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.ipUrl)
  }
}
