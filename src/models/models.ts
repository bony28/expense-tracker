export interface Expense {
  id: number;
  name: string;
  type: string;
  amount: number;
}

export interface SelectData {
  value: string;
  text: string;
  isSelected: boolean;
}

export const expenseCategories: SelectData[] = [
  { value: 'food', text: 'Food & Groceries', isSelected: false },
  { value: 'transport', text: 'Transport', isSelected: false },
  { value: 'utilities', text: 'Utilities', isSelected: true },
  { value: 'rent', text: 'Rent', isSelected: false },
  { value: 'entertainment', text: 'Entertainment', isSelected: false },
  { value: 'health', text: 'Health & Medical', isSelected: false },
  { value: 'education', text: 'Education', isSelected: false },
  { value: 'others', text: 'Others', isSelected: false },
  { value: 'salary', text: 'Salary', isSelected: false },
];
