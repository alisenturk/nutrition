import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NutritionCalc } from './nutrition-calc';
import {ToastController} from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  model:NutritionCalc = new NutritionCalc();
  
  constructor(public navCtrl: NavController,
              public toastController: ToastController) {
    this.model.cinsiyet = 'e';
  }

  showToast(msg:string){
    let toast = this.toastController.create({
      message:msg,
      duration:2000,
      position:'top'
    });
    toast.present();
  }

  calcIdealKilo(){
    if(this.model.cinsiyet==='e'){
      this.model.idealKilo = parseFloat(parseFloat((50 + 2.3 * (this.model.boy / 2.54 - 60)).toString()).toFixed(2));
    }else{
      this.model.idealKilo = parseFloat(parseFloat((45.5 + 2.3 * (this.model.boy / 2.54 - 60)).toString()).toFixed(2));
    }
    if(!this.model.duzltilmisIdealKilo || this.model.duzltilmisIdealKilo<0){
      this.model.duzltilmisIdealKilo = this.model.idealKilo;
    }
  }
  calc(){
    var isBoy = false, isKilo = false, isYas = false, isStress = false, isAktivite = false;
    if(this.model.boy && this.model.boy>0){isBoy=true;}
    
    if(this.model.yas && this.model.yas>0){isYas=true;}
    if(this.model.stresDegeri && this.model.stresDegeri>0){isStress=true};
    if(this.model.aktiviteDegeri && this.model.aktiviteDegeri>0){isAktivite=true;}

    if(isBoy){
      this.calcIdealKilo();
    }
    if(this.model.idealKilo && this.model.idealKilo>0){isKilo=true;}

    if(isBoy && isKilo && isYas && isStress && isAktivite){
      //Günlük Enerji, HRB
    }

    if(isBoy && this.model.idealKilo && isYas){
      let kilo:number;
      kilo = this.model.idealKilo;
      if(this.model.duzltilmisIdealKilo && this.model.duzltilmisIdealKilo>0){
        kilo = this.model.duzltilmisIdealKilo;
      }
      if(this.model.cinsiyet==='e'){
        this.model.bazalEnerji = parseFloat(parseFloat((66.75 + (kilo * 13.75) + (this.model.boy * 5) - (this.model.yas * 6.76)).toString()).toFixed(2));
      }else{
        this.model.bazalEnerji = parseFloat(parseFloat((655.1 + (kilo * 9.56) + (this.model.boy *1.85) - (this.model.yas * 4.86)).toString()).toFixed(2));
      }

      if(isAktivite && isStress){
        this.model.gunlukEnerji = parseFloat(parseFloat((this.model.bazalEnerji * this.model.stresDegeri + this.model.aktiviteDegeri).toString()).toFixed(2));
        
      }

    }
    

  }

}
