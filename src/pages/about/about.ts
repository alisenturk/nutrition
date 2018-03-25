import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NutritionCalc } from './nutrition-calc'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  model:NutritionCalc = new NutritionCalc();
  
  constructor(public navCtrl: NavController) {
    this.model.cinsiyet = 'e';
  }

}
