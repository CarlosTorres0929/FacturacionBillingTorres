import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentbill_states } from './listar.componentbill_states';

describe('ListarComponentbill_states', () => {
  let component: ListarComponentbill_states;
  let fixture: ComponentFixture<ListarComponentbill_states>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentbill_states ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentbill_states);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
