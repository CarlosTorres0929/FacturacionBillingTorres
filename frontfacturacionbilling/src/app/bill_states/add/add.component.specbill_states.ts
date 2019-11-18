import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentbill_states } from './add.componentbill_states';

describe('AddComponentbill_states', () => {
  let component: AddComponentbill_states;
  let fixture: ComponentFixture<AddComponentbill_states>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentbill_states ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentbill_states);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
