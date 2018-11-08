import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character; // TODO: consider using @Input here

  hasProp(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  // // Step 1. Get all the object keys.
  // let evilResponseProps = Object.keys(evilResponse);
  // // Step 2. Create an empty array.
  // let goodResponse = [];
  // // Step 3. Iterate throw all keys.
  // for (prop of evilResponseProps) {
  //     goodResponse.push(evilResponseProps[prop]);
  // }


  constructor() { }

  ngOnInit() {
  }

}
