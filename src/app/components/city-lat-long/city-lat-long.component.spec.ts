import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLatLongComponent } from './city-lat-long.component';

describe('CityLatLongComponent', () => {
  let component: CityLatLongComponent;
  let fixture: ComponentFixture<CityLatLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityLatLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityLatLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
