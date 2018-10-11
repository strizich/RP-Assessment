import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiClassComponent } from './multi-class.component';

describe('MultiClassComponent', () => {
  let component: MultiClassComponent;
  let fixture: ComponentFixture<MultiClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
