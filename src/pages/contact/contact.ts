import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrtaKol } from './orta-kol';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  model: OrtaKol = new OrtaKol();
  constructor(public navCtrl: NavController) {
    this.model.cinsiyet = 'e';
  }

  calc() { 
    if (this.model.tricepsCiltKalinligi && this.model.ortaKolCapi) {
      this.model.tricepsCiltKalinligi = (Number)(this.model.tricepsCiltKalinligi);  
      this.model.ortaKolCapi = (Number)(this.model.ortaKolCapi);

      if (this.model.cinsiyet === 'e') {        
        this.model.sonuc = parseFloat(parseFloat(((((this.model.ortaKolCapi - (3.14 * this.model.tricepsCiltKalinligi)) * (this.model.ortaKolCapi - (3.14 * this.model.tricepsCiltKalinligi))) / (4 * 3.14)) - 10).toString()).toFixed(2));
                
      } else {
        this.model.sonuc = parseFloat(parseFloat(((((this.model.ortaKolCapi - (3.14 * this.model.tricepsCiltKalinligi)) * (this.model.ortaKolCapi - (3.14 * this.model.tricepsCiltKalinligi))) / (4 * 3.14)) - 6.5).toString()).toFixed(2));
        
          
        
      }
    }
  }

}
