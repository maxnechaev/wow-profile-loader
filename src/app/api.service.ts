import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })

export class ApiService {

  data: any = {};

  // httpOptions = {
  //   region: 'eu',
  //   access_token: 'USYGuPjU8c801TfUhVg1dQM5ghYFr1BVCR',
  //   apiPath: '/wow/user/characters',
  //   myURL: '/',
  //   ipUrl: 'https://jsonip.com',
  //   // blizzUrl: `https://${this.httpOptions.region}.api.blizzard.com${this.httpOptions.apiPath}?access_token=${this.httpOptions.access_token}`,
  //   blizzUrl: 'https://eu.api.blizzard.com/wow/user/characters?access_token=USYGuPjU8c801TfUhVg1dQM5ghYFr1BVCR',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   json: true,
  //   optionsSuccessStatus: 200,
  // };

  // ipUrl = 'https://jsonip.com';
  // blizzUrl = 'https://eu.api.blizzard.com/wow/user/characters?access_token=USYGuPjU8c801TfUhVg1dQM5ghYFr1BVCR';

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url)
    .pipe(
      catchError(err => {
        if (err.status == 401) {
          console.log('HERE');
            console.log('Response status 410. The request sent by the client could not be authenticated');
            return EMPTY;
        } else {
            return throwError(err);
        }
      }))
    .subscribe(res => {
        console.log('the data now is', res);
        this.data = res;
      })
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//
// // const app = require('express')();                                           // <------- NPM install
// // const passport = require('passport');                                       // <------- NPM install
// // const BnetStrategy = require('passport-bnet').Strategy;                     // <------- NPM install
// // const BNET_ID = process.env.BNET_ID;
// // const BNET_SECRET = process.env.BNET_SECRET;
// // const http = require('http');
// // const fetch = require('node-fetch');
// // const credentials = require("./credentials");
//
// // const PORT = 3000;
//
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class ApiService {
//
//   // characters: any = {};
//   wowChars: any = {};
//
//   httpOptions = {
//     region: `eu`, // <------- us works, apac doesn't
//     access_token: `US8RfVsQlZwHDCe8GaXxEZki1B7Lp42bfR`,
//     apiPath: `/wow/user/characters`,
//     myURL: `/`,
//     // myURL: `/api/characters`,
//     // myURL: `https://${this.httpOptions.region}.api.blizzard.com${this.httpOptions.apiPath}?&access_token=${this.httpOptions.access_token}`,
//     // url: 'https://eu.api.blizzard.com/wow/user/characters?locale=ru_RU&access_token=US8RfVsQlZwHDCe8GaXxEZki1B7Lp42bfR',
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     }),
//     json: true,
//     optionsSuccessStatus: 200,
//   };
//
//   // fetch(myURL
//   //   .then(response => response.json())
//   //   .then(myJson => console.log(
//   //     JSON.stringify(myJson)))
//   //   .catch(error => console.error('The following Error came from app.js | back end server: ', error));
//
//   constructor(private http: HttpClient) {
//       this.http.get<{characters:any}>(this.httpOptions.myURL)
//       .subscribe(characters => {
//         console.log('the characters is', characters.characters);
//         this.wowChars = characters;
//         // console.log('Characters from api.service.ts ', this.wowChars.characters);
//         // console.log('Type of Characters ', typeof this.wowChars.characters);
//       })
//
//
//   }
//
//   // getCharacters() {
//   //   this.http.get(this.httpOptions.myURL).subscribe(characters => {
//   //     this.wowChars = characters;
//   //     console.log('Characters from api.service.ts ', this.wowChars.characters);
//   //     console.log('Type of Characters ', typeof this.wowChars.characters);
//   //   })
//   // }
// }
