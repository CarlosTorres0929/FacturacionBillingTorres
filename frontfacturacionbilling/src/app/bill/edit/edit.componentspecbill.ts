import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentbill } from './edit.componentbill';

describe('EditComponentbill', () => {
  let component: EditComponentbill;
  let fixture: ComponentFixture<EditComponentbill>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentbill ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
