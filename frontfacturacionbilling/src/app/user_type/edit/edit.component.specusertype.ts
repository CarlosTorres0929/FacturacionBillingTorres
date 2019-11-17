import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentusertype } from './edit.componentusertype';

describe('EditComponentusertype', () => {
  let component: EditComponentusertype;
  let fixture: ComponentFixture<EditComponentusertype>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentusertype ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentusertype);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
