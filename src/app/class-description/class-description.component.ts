import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-description',
  templateUrl: './class-description.component.html',
  styleUrls: ['./class-description.component.css']
})
export class ClassDescriptionComponent implements OnInit {

  @Input() character;

  constructor() { }

  ngOnInit() { }

}
