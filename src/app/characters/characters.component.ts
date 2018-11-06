import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-chars';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters = CHARACTERS;
  selectedCharacter: Character;
  onSelect(character: Character): void {
  this.selectedCharacter = character;
}

  constructor() { }

  ngOnInit() {
  }

}
