/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartFunnelComponent } from './chart-funnel.component';

describe('ChartFunnelComponent', () => {
  let component: ChartFunnelComponent;
  let fixture: ComponentFixture<ChartFunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
