import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsltComponent } from './repairslt.component';

describe('RepairsltComponent', () => {
  let component: RepairsltComponent;
  let fixture: ComponentFixture<RepairsltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairsltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairsltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
