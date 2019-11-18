import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentcountries} from './edit.componentcountries';

describe('EditComponentcountries', () => {
  let component: EditComponentcountries;
  let fixture: ComponentFixture<EditComponentcountries>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentcountries ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentcountries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
