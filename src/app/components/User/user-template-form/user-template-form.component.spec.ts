import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateFormComponent } from './UserTemplateFormComponent';

describe('UserTemplateFormComponent', () => {
  let component: UserTemplateFormComponent;
  let fixture: ComponentFixture<UserTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
