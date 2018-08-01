import { Component } from '@angular/core';
import { Expense } from './model/expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feladat3';

  expenses: Expense[] = [];

  categories: string[] = ['ÉTEL', 'SZÓRAKOZÁS', 'LAKHATÁS'];

  addExpense(date: Date, description: string, amount: number, type: string) {
    this.expenses.push(new Expense(date, description, amount, type));
  }

  deleteExpense(expense: Expense) {
    this.expenses.splice(this.expenses.indexOf(expense), 1);
  }
}
