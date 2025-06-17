import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAddComponent } from './expenses-add.component';

describe('ExpensesAddComponent', () => {
  let component: ExpensesAddComponent;
  let fixture: ComponentFixture<ExpensesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
