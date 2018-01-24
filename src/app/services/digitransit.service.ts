import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DigitransitService {

  baseUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) { }

  getRoutes(stopName) {
    const body = `{
                    stops(name: "${stopName}") {
                      name
                      lat
                      lon
                      patterns {
                        id
                        name
                        route {
                          gtfsId
                          shortName
                          longName
                        }
                        directionId
                      }
                    }
                   }`;
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql')
    };
    return this.http.post(this.baseUrl, body, settings);
  }
}
