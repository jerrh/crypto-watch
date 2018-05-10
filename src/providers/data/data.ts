import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  result: any;

  constructor(public _http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getCoins(coins) {
    let coinlist = '';

    coinlist = coins.join();

    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+coinlist+"&tsyms=USD")
      .map(result => this.result = result);
  }

  getCoin(coin) {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+coin+"&tsyms=USD")
      .map(result => this.result = result);
  }

  getChart(coin) {
    return this._http.get("https://min-api.cryptocompare.com/data/histoday?fsym="+coin+"&tsym=USD&limit=30&aggregate=1")
      .map(result => this.result = result);
  }

   allCoins() {
      return this._http.get("https://min-api.cryptocompare.com/data/all/coinlist")
      .map(result => this.result = result);
  } 

}
