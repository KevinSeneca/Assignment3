import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(
    private http: HttpClient,
  ) { }

  // Reflect the usage of a get request for the different SpaceX endpoints
  get(endpoint: string, version: string = 'v4') {
    return this.http.get(`https://api.spacexdata.com/${version}/${endpoint}`);
  }
}
