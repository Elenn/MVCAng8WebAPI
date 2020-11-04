import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterNationalParkComponent } from './twitter-national-park.component';

describe('TwitterNationalParkComponent', () => {
  let component: TwitterNationalParkComponent;
  let fixture: ComponentFixture<TwitterNationalParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterNationalParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterNationalParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
