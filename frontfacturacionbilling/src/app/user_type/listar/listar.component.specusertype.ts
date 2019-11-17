import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponenttypeuser } from './listar.componentusertype';

describe('ListarComponenttypeuser', () => {
  let component: ListarComponenttypeuser;
  let fixture: ComponentFixture<ListarComponenttypeuser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponenttypeuser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponenttypeuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
