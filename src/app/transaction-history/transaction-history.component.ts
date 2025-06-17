import { Component } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { CommonModule } from '@angular/common';
import { AmountPipe } from '../amount.pipe';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule, AmountPipe],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
})
export class TransactionHistoryComponent {
  constructor(public expenseService: ExpensesService) {}
}
