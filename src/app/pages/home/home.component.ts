import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BalanceComponent } from '../../balance/balance.component';
import { ExpensesAddComponent } from '../../expenses-add/expenses-add.component';
import { TransactionHistoryComponent } from '../../transaction-history/transaction-history.component';
import { CategoryComponent } from '../../category/category.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BalanceComponent,
    ExpensesAddComponent,
    TransactionHistoryComponent,
    CategoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
