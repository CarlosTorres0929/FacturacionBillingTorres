import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentcities } from './edit.componentcities';

describe('EditEditComponentcities', () => {
  let component: EditComponentcities;
  let fixture: ComponentFixture<EditComponentcities>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentcities ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentcities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
