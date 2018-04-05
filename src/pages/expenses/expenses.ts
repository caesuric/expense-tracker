import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {
  categories = {categories: []}
  currentCategory = {current: {balance: 0, dailyAllowance: 0, name: ''}}
  nextTransaction = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.categories = navParams.get('categories')
      this.currentCategory = navParams.get('currentCategory')
      this.storage = storage
  }
  addTransaction() {
      this.currentCategory.current.balance -= this.nextTransaction
      this.nextTransaction = 0
      this.storage.set('categories', JSON.stringify(this.categories.categories))
  }
}
