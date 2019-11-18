import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentcountries } from './add.componentcountries';

describe('AddComponentcountries', () => {
  let component: AddComponentcountries;
  let fixture: ComponentFixture<AddComponentcountries>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentcountries ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentcountries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
