import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponenttypeuser } from './add.componentusertype';

describe('AddComponenttypeuser', () => {
  let component: AddComponenttypeuser;
  let fixture: ComponentFixture<AddComponenttypeuser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponenttypeuser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponenttypeuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
