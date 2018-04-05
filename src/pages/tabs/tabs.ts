import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'

import {ExpensesPage} from '../expenses/expenses'
import {CategoriesPage} from '../categories/categories'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExpensesPage;
  tab2Root = CategoriesPage;
  params = {
      categories: {categories: []},
      currentCategory: {
          current: {}
      }
  }

  constructor(private storage: Storage) {
      var currentDate = new Date()
      storage.get('categories').then((categories) => {
          if (categories) {
              this.params.categories.categories = JSON.parse(categories)
              for (let category of this.params.categories.categories) {
                  category.dailyAllowance = parseFloat(category.dailyAllowance)
                  category.balance = parseFloat(category.balance)
              }
          }
          storage.get('lastLoggedIn').then((lastJsonDate) => {
              var lastDate = new Date(lastJsonDate)
              if (currentDate.getDay()!=lastDate.getDay() || currentDate.getDate()!=lastDate.getDate() || currentDate.getFullYear()!=lastDate.getFullYear()) {
                  this.updateBalances()
              }
              storage.set('lastLoggedIn', currentDate.toJSON())
          })
      })
  }
  updateBalances() {
      var categories = this.params.categories.categories
      for (let category of categories) {
          category.balance += category.dailyAllowance
      }
  }
}
