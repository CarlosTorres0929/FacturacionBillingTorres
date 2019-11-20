import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentbill} from './add.componentbill';

describe('AddComponentbill', () => {
  let component: AddComponentbill;
  let fixture: ComponentFixture<AddComponentbill>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentbill ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
