import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentorders} from './add.componentorders';

describe('AddComponentorders', () => {
  let component: AddComponentorders;
  let fixture: ComponentFixture<AddComponentorders>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentorders ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
