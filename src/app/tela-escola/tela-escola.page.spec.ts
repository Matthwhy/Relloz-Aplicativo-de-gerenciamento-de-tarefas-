import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscolaPage } from './tela-escola.page';

describe('TelaEscolaPage', () => {
  let component: TelaEscolaPage;
  let fixture: ComponentFixture<TelaEscolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEscolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEscolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
