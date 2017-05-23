/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CellFormattingComponent } from './cell-formatting.component';

describe('CellFormattingComponent', () => {
  let component: CellFormattingComponent;
  let fixture: ComponentFixture<CellFormattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellFormattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
