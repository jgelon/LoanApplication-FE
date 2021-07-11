import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyProxyPipe implements PipeTransform {
  currencyPipe = new CurrencyPipe('en')

  transform(value:any, code = 'EUR', display = 'symbol', digites = '0.0', local ='en') {
     return this.currencyPipe.transform(value,code,display,digites,local)
  }

}