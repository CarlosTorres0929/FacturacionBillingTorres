import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentbill } from './listar.componentbill';

describe('ListarComponentbill', () => {
  let component: ListarComponentbill;
  let fixture: ComponentFixture<ListarComponentbill>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentbill ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
