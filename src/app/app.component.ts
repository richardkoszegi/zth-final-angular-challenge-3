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

  addExpense(date: Date, description: string, amount: number) {
    this.expenses.push(new Expense(date, description, amount));
  }
}
