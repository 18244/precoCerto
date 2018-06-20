import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html'
})
export class VendaPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.presentToast(); 
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Compra efetuada com sucesso!!!',
      duration: 3000
    });
    toast.present();
  }

}
