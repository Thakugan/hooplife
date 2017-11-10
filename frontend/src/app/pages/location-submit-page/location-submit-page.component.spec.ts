import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSubmitPageComponent } from './location-submit-page.component';

describe('LocationSubmitPageComponent', () => {
  let component: LocationSubmitPageComponent;
  let fixture: ComponentFixture<LocationSubmitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSubmitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSubmitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
