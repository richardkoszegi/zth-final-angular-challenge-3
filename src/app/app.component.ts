import { Component } from '@angular/core';
import { Expense } from './model/expense.model';
import { LocalizationService } from './services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feladat3';

  expenses: Expense[] = [];

  categories: string[] = ['ÉTEL', 'SZÓRAKOZÁS', 'LAKHATÁS'];

  filteredCategory: string = null;

  get displayedExpenses(): Expense[] {
    if (this.filteredCategory !== null) {
      const displayedList = [];
      for( const exp of this.expenses) {
        if (exp.type === this.filteredCategory) {
          this.displayedExpenses.push(exp);
        }
      }
      return displayedList;
    } else {
      return this.expenses;
    }
  }

  constructor(private localizationService: LocalizationService) {}

  addExpense(date: Date, description: string, amount: number, type: string) {
    this.expenses.push(new Expense(date, description, amount, type));
  }

  deleteExpense(expense: Expense) {
    this.expenses.splice(this.expenses.indexOf(expense), 1);
  }

  changeLanguage() {
    this.localizationService.switchLanguage();
  }
}
