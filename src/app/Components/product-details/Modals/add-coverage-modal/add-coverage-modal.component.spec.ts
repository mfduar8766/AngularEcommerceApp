import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoverageModalComponent } from './add-coverage-modal.component';

describe('AddCoverageModalComponent', () => {
  let component: AddCoverageModalComponent;
  let fixture: ComponentFixture<AddCoverageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoverageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoverageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
