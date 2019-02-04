import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsShowComponent } from './models-show.component';

describe('ModelsShowComponent', () => {
  let component: ModelsShowComponent;
  let fixture: ComponentFixture<ModelsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
