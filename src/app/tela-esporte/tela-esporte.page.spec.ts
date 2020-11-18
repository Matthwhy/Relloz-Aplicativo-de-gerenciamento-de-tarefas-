import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEsportePage } from './tela-esporte.page';

describe('TelaEsportePage', () => {
  let component: TelaEsportePage;
  let fixture: ComponentFixture<TelaEsportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEsportePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEsportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
