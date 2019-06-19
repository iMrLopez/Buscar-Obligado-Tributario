import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchObligadoTributarioService {
  apiURL = 'https://apis.gometa.org/cedulas/';

  constructor(private httpClient: HttpClient) { }

  getGometa(query: string) {
    return this.httpClient.get(`${this.apiURL}${query}`);
  }

}
