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
