import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandecisionComponent } from './loandecision.component';

describe('LoandecisionComponent', () => {
  let component: LoandecisionComponent;
  let fixture: ComponentFixture<LoandecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
