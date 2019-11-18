import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentcities } from './add.componentcities';

describe('AddComponentcities', () => {
  let component: AddComponentcities;
  let fixture: ComponentFixture<AddComponentcities>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentcities ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentcities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
