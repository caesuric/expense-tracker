import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage'

import * as utils from '../../utils'

@Component({
  selector: 'page-debug',
  templateUrl: 'debug.html'
})
export class DebugPage {
  categories = {categories: []}
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.categories = navParams.get('categories')
      this.storage = storage
  }
  updateBalances() {
      utils.updateBalances(this.categories.categories, this.storage)
  }
}
