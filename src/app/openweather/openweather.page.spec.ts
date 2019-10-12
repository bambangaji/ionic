import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweatherPage } from './openweather.page';

describe('OpenweatherPage', () => {
  let component: OpenweatherPage;
  let fixture: ComponentFixture<OpenweatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenweatherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
