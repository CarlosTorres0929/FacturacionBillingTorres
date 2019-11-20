import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponentorders } from './listar.componentorders';

describe('ListarComponentorders', () => {
  let component: ListarComponentorders;
  let fixture: ComponentFixture<ListarComponentorders>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponentorders ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponentorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
