import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamEmailComponent } from './spam-email.component';

describe('SpamEmailComponent', () => {
  let component: SpamEmailComponent;
  let fixture: ComponentFixture<SpamEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpamEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
