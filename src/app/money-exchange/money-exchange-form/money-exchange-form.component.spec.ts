/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MoneyExchangeFormComponent } from './money-exchange-form.component';
import { MoneyExchangeService } from './money-exchange.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



describe('MoneyExchangeFormComponent', () => {
  let component: MoneyExchangeFormComponent;
  let fixture: ComponentFixture<MoneyExchangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyExchangeFormComponent ],
      providers: [MoneyExchangeService],
      imports: [CommonModule,
        FormsModule,
        HttpClientModule,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate euros to dolares', () => {
    expect(component).toBeTruthy();
    const euros = 1;
    const dolares = component.convertDolares(euros);
    expect(euros).toBe(dolares);
  });

});
