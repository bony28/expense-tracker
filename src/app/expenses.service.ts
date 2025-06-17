import { Injectable } from '@angular/core';
import { Expense } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  expensesList: Expense[] = [];
  add(text: string, amount: number, type: string) {
    if (!text.trim()) return;
    const newList: Expense = {
      id: this.expensesList.length + 1,
      name: text,
      type: type,
      amount: amount,
    };
    this.expensesList.push(newList);
    console.log(this.expensesList);
  }
  constructor() {}
}
