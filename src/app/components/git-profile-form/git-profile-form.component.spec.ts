import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileFormComponent } from './git-profile-form.component';

describe('GitProfileFormComponent', () => {
  let component: GitProfileFormComponent;
  let fixture: ComponentFixture<GitProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
