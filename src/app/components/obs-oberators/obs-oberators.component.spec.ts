import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsOberatorsComponent } from './obs-oberators.component';

describe('ObsOberatorsComponent', () => {
  let component: ObsOberatorsComponent;
  let fixture: ComponentFixture<ObsOberatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsOberatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsOberatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
