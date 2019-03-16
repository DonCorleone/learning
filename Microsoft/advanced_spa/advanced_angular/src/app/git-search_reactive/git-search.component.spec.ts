import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchReactiveComponent } from './git-search-reactive.component';

describe('GitSearchComponent', () => {
  let component: GitSearchReactiveComponent;
  let fixture: ComponentFixture<GitSearchReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
