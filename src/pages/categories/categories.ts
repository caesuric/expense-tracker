import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
    categories = {categories: []}
    currentCategory = {current: {balance: 0, dailyAllowance: 0, name: ''}}
    newCategoryName = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.categories = navParams.get('categories')
      this.currentCategory = navParams.get('currentCategory')
      this.storage = storage
  }
  newCategory() {
      var obj = {
          dailyAllowance: 0,
          balance: 0,
          name: this.newCategoryName
      }
      this.categories.categories.push(obj)
      this.newCategoryName = ''
      this.currentCategory.current = obj
      this.storage.set('categories', JSON.stringify(this.categories.categories))
  }
  allowanceChange(event) {
      this.currentCategory.current.balance = event
      this.currentCategory.current.dailyAllowance = event
      this.storage.set('categories', JSON.stringify(this.categories.categories))
  }
}
