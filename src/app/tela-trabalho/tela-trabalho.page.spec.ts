import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTrabalhoPage } from './tela-trabalho.page';

describe('TelaTrabalhoPage', () => {
  let component: TelaTrabalhoPage;
  let fixture: ComponentFixture<TelaTrabalhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaTrabalhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTrabalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
