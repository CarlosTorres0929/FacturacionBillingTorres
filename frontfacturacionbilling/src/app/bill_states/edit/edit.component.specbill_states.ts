import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentbill_states } from './edit.';

describe('EditComponentbill_states', () => {
  let component: EditComponentbill_states;
  let fixture: ComponentFixture<EditComponentbill_states>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentbill_states ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentbill_states);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
