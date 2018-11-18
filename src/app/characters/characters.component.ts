import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})

export class CharactersComponent implements OnInit {

  @Input() character;

  httpOptions = {
    region: 'eu', // manually change the game server to yours
    access_token: 'USYGuPjU8c801TfUhVg1dQM5ghYFr1BVCR', //change this line with your token in order to reach your profile
    apiPath: '/wow/user/characters',
    myURL: '/',
    ipUrl: 'https://jsonip.com',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    optionsSuccessStatus: 200,
  };

  blizzUrl = `https://${this.httpOptions.region}.api.blizzard.com${this.httpOptions.apiPath}?access_token=${this.httpOptions.access_token}`

  selectedCharacter;
  onSelect(character): void {
    this.selectedCharacter = character;
  }

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.blizzUrl)
  }
}
