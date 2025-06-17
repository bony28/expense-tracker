import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './expenses-add.component.html',
  styleUrl: './expenses-add.component.scss',
})
export class ExpensesAddComponent {
  expenseText: string = '';
  expenseAmount: number = 0;
  selectedValue: string = '';

  handleAdd() {
    console.log('shdsg');
    this.expenseService.add(
      this.expenseText,
      this.expenseAmount,
      this.selectedValue
    );
    this.expenseText = '';
    this.expenseAmount = 0;
    this.selectedValue = '';
  }

  constructor(public expenseService: ExpensesService) {}
}
