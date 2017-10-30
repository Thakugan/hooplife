import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailsPageComponent } from './location-details-page.component';

describe('LocationDetailsPageComponent', () => {
  let component: LocationDetailsPageComponent;
  let fixture: ComponentFixture<LocationDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
