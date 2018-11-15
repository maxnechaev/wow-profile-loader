import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { authData } from './authData'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  submitObj: any = {};

  ipUrl = 'https://jsonip.com';

  profileForm = new FormGroup({
    battleNetId: new FormControl(''),
    selectedRegion: new FormControl(''),
  });

  regions = [
    {name: 'United States (US)', value: 'us'},
    {name: 'Europe (EU)', value: 'eu'},
    {name: 'Asia-Pacific (APAC)', value: 'apac'},
  ]

  model = new authData(undefined, null);

  submitted = false;

  onSubmit() {
    this.submitted = true;

   }

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.ipUrl)
  }
}
