import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    url: 'https://eu.api.blizzard.com/wow/user/characters?locale=ru_RU&access_token=US8RfVsQlZwHDCe8GaXxEZki1B7Lp42bfR',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    json: true,
    optionsSuccessStatus: 200,
  };
  characters: any = this.characters;

  constructor(private http: HttpClient) { }

  getCharacters() {
    this.http.get(this.httpOptions.url).subscribe(characters => {
      this.characters = characters;
      console.log('Characters from api.service.ts ', this.characters.characters.length);
      console.log('Type of Characters ', typeof this.characters);
    })
  }
}
