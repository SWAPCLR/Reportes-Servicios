import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepServiciosComponent } from './rep-servicios.component';

describe('RepServiciosComponent', () => {
  let component: RepServiciosComponent;
  let fixture: ComponentFixture<RepServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
