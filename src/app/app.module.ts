import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoneyExchangeService } from './money-exchange/money-exchange-form/money-exchange.service';
import { AppComponent } from './app.component';
import { MoneyExchangeFormComponent } from './money-exchange/money-exchange-form/money-exchange-form.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedComponentsModule } from './shared-components/shared-components.module';
@NgModule({
  declarations: [
    AppComponent,
    MoneyExchangeFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    SharedComponentsModule,
  ],
  providers: [
    MoneyExchangeService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
