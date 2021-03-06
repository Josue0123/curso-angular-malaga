/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hijo2Component } from './hijo2.component';

describe('Hijo2Component', () => {
  let component: Hijo2Component;
  let fixture: ComponentFixture<Hijo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
