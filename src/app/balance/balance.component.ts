import { Component } from '@angular/core';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-balance',
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent {
  constructor(public expenseService: ExpensesService) {}

  balanceFetch() {
    const incomeSum = this.expenseService.expensesList
      .filter((x) => x.type === 'income')
      .reduce((total, item) => total + item.amount, 0);
    const expenseSum = this.expenseService.expensesList
      .filter((x) => x.type === 'expense')
      .reduce((total, item) => total + item.amount, 0);

    console.log(incomeSum);
    console.log(expenseSum);

    return incomeSum - expenseSum;
  }
}
