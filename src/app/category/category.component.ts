import { Component, computed, inject } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { CommonModule } from '@angular/common';
import { AmountPipe } from '../amount.pipe';

@Component({
  selector: 'app-category',
  imports: [CommonModule, AmountPipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryService = inject(ExpensesService);

  categoryWiseTotal = computed(() => {
    const expenses = this.categoryService.expensesList; // ✅ call signal here

    const map = new Map<string, number>();
    expenses
      .filter((x) => x.type === 'expense')
      .forEach((exp) => {
        const current = map.get(exp.name) || 0;
        map.set(exp.name, current + exp.amount);
      });

    return Array.from(map.entries()).map(([name, total]) => ({ name, total }));
  });
}
