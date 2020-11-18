import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
})
export class TelaInicialPage implements OnInit {

  value = ''
  items:any = []

  constructor(public ToastController : ToastController){}

  async openToast(){
    const toast = await this.ToastController.create({
      message: 'Sua tarefa foi deletada com sucesso.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }


  ngOnInit() {
    if (localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'))  
    }
  }
  addItem(){
    let obj = {
      value: this.value,
      isDone : false
  
    }
    this.items.unshift(obj)
    localStorage.setItem('items', JSON.stringify(this.items))
    this.value = ''
  }
  deleteItem(ind){
    this.items = this.items.filter((c,index)=>index != ind)
    localStorage.setItem('items', JSON.stringify(this.items))
  }
  setDone(index){
    let item = this.items.find((c,ind)=> index != ind )
    item.isDone = !item.isDone
    localStorage.setItem('items', JSON.stringify(this.items))
  }
}
