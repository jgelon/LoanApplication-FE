import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantypeSelectionComponent } from './loantype-selection.component';

describe('LoantypeSelectionComponent', () => {
  let component: LoantypeSelectionComponent;
  let fixture: ComponentFixture<LoantypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoantypeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoantypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
