import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentorders } from './edit.componentorders';

describe('EditComponentorders', () => {
  let component: EditComponentorders;
  let fixture: ComponentFixture<EditComponentorders>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentorders ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
