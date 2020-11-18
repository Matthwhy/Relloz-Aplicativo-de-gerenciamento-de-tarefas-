import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLazerPage } from './tela-lazer.page';

describe('TelaLazerPage', () => {
  let component: TelaLazerPage;
  let fixture: ComponentFixture<TelaLazerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLazerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLazerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
