import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  submitObj: any = {};
  selectedRegion: string;

  onSubmit(form : NgForm) {
    this.submitObj = form
    // console.log('array', this.arr);
    console.log('value', form.value);
   }

  ipUrl = 'https://jsonip.com';

  regions = [
    {name: 'United States (US)', value: 'us'},
    {name: 'Europe (EU)', value: 'eu'},
    {name: 'Asia-Pacific (APAC)', value: 'apac'},
  ]

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.ipUrl)
    this.api.onSubmit(this.submitObj);
  }
}
