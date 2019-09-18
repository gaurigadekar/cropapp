import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinKgPage } from './productin-kg.page';

describe('ProductinKgPage', () => {
  let component: ProductinKgPage;
  let fixture: ComponentFixture<ProductinKgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductinKgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductinKgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
