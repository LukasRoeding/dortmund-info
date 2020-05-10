import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixseeComponent } from './phoenixsee.component';

describe('PhoenixseeComponent', () => {
  let component: PhoenixseeComponent;
  let fixture: ComponentFixture<PhoenixseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
