import { Component, OnInit } from '@angular/core';
import { MoneyExchangeService } from './money-exchange.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-money-exchange-form',
  templateUrl: './money-exchange-form.component.html',
  styleUrls: ['./money-exchange-form.component.scss']
})
export class MoneyExchangeFormComponent implements OnInit {
  public euros: any;
  public dolares: any;

  

  constructor(private moneyExchangeService: MoneyExchangeService) {

    const numbers = interval(600000);
    numbers.subscribe(x =>  alert('probando'));
    //setTimeout(this.alertFunc, 3000);
    
  }
 
  ngOnInit() {
    
  }
  
  onKeydown() {
      this.onClickCalculate();
  }

  convertDolares(value) {
    return value * this.euros;
  }

  onClickCalculate() {
    debugger;
      this.moneyExchangeService.getDolares().subscribe((value: any) => {
        this.dolares = this.convertDolares(value.rates.USD);
      });
  }


 alertFunc() {
    alert("Hello!");
  }




}
