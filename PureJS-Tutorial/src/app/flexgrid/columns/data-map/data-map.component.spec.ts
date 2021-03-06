/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataMapComponent } from './data-map.component';

describe('DataMapComponent', () => {
  let component: DataMapComponent;
  let fixture: ComponentFixture<DataMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
