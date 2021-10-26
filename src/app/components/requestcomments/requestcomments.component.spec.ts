import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcommentsComponent } from './requestcomments.component';

describe('RequestcommentsComponent', () => {
  let component: RequestcommentsComponent;
  let fixture: ComponentFixture<RequestcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
