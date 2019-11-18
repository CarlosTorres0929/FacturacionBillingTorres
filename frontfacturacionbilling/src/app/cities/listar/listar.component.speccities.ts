import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentcities } from './listar.componentcities';

describe('ListarComponentcities', () => {
  let component: ListarComponentcities;
  let fixture: ComponentFixture<ListarComponentcities>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentcities ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentcities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
