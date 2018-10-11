import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimsComponent } from './anims.component';

describe('AnimsComponent', () => {
  let component: AnimsComponent;
  let fixture: ComponentFixture<AnimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
