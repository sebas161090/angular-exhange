/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoneyExchangeService } from './money-exchange.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: MoneyExchange', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoneyExchangeService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([MoneyExchangeService], (service: MoneyExchangeService) => {
    expect(service).toBeTruthy();
  }));


});
