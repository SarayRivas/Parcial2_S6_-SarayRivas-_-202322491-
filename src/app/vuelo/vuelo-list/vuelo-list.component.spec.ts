/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VueloListComponent } from './vuelo-list.component';

describe('VueloListComponent', () => {
  let component: VueloListComponent;
  let fixture: ComponentFixture<VueloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
