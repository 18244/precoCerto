import { VendaPage } from './../venda/venda';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    
  }

  onclickCompra(){
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 500
    });
    loader.present();
    this.navCtrl.push(VendaPage);
   }
  }

