import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { dhis2 } from '../dhis2-config';
import { isDevMode } from '@angular/core';

const user = dhis2.user;
const password = dhis2.password;

var httpOptions;

if (isDevMode()) {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': "Basic " + btoa(user + ":" + password)
    })
  };
} else {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
}
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEntities() {
    return this.http.get("https://medair.dhis2.bluesquare.org/api/trackedEntityInstances.json?ou=nPlzedFNDLT", httpOptions)
  }
}
