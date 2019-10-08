import { Component, OnInit } from '@angular/core';
import { MoneyExchangeService } from './money-exchange.service';

@Component({
  selector: 'app-money-exchange-form',
  templateUrl: './money-exchange-form.component.html',
  styleUrls: ['./money-exchange-form.component.css']
})
export class MoneyExchangeFormComponent implements OnInit {
  public euros:string;
  public dolare:string;
  constructor(private moneyExchangeService: MoneyExchangeService) { }

  ngOnInit() {
  }
  onKeydown(event) {
    this.moneyExchangeService.getDolares().subscribe((value) =>{
      // AQUI LA LOGICA PARA OBTENER LA CONVERSION
      // DE DOLARES A SOLES
      console.log(value);
    }); 
  }

  convertDolares(value){
    //Logica para convertir a dolares
    return value * 1;
  }




}
