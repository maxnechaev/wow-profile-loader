import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character ; 

  hasProp(obj, prop) {
    return obj.hasOwnProperty(prop);
  }

  constructor() { }

  ngOnInit() { }

}
