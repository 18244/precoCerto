import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ProdutoPage } from './../produto/produto';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cep: string;
  produtos: any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.produtos = [
      {descricao:"novalgina", preco: 1.99},
      {descricao:"tilenol", preco:1.99},
      {descricao:"doril", preco:1.99}
  ]
  }

  enviaDados():void{

    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 1080
    });
    loader.present();
    this.navCtrl.push(ProdutoPage);
  }

}
