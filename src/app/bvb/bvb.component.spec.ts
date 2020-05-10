import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvbComponent } from './bvb.component';

describe('BvbComponent', () => {
  let component: BvbComponent;
  let fixture: ComponentFixture<BvbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BvbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
