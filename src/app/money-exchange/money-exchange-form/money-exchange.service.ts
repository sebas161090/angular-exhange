import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoneyExchangeService {

  constructor(private httpClient: HttpClient) { }

  getDolares() {
    return this.httpClient.get('http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757');
  }

}
