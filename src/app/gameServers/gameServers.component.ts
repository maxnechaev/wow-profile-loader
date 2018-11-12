import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gameServers',
  templateUrl: './gameServers.component.html',
  styleUrls: ['./gameServers.component.css']
})
export class GameServersComponent implements OnInit {

  name = 'Angular 6';
  ipAddress: any;

  gameServers = [
    'United States (US)',
    'Europe (EU)',
    'Asia-Pacific (APAC)'
  ];

  constructor(private http: HttpClient){
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('th data', data);
      this.ipAddress = data
    })
  }

  ngOnInit() { }

}
