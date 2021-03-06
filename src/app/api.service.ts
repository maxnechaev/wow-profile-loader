import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ApiService {

  data: any = {};

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url)
    .pipe(
      catchError(err => {
        if (err.status == 401) {
          console.log('Response status 401. The request sent by the client could not be authenticated');
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
