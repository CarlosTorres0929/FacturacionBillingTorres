import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentcountries } from './listar.componentcountries';

describe('ListarComponentcountries', () => {
  let component: ListarComponentcountries;
  let fixture: ComponentFixture<ListarComponentcountries>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentcountries ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentcountries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
