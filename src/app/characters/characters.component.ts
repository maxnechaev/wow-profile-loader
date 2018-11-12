import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() character;

  selectedCharacter;
  onSelect(character): void {
  this.selectedCharacter = character;
}

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCharacters()
  }

}
