import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})

export class CharactersComponent implements OnInit {

  @Input() character;

  blizzUrl = 'https://eu.api.blizzard.com/wow/user/characters?access_token=USYGuPjU8c801TfUhVg1dQM5ghYFr1BVCR';

  selectedCharacter;
  onSelect(character): void {
    this.selectedCharacter = character;
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.blizzUrl)
  }
}
